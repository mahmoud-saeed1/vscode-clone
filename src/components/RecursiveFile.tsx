import React, { useState, useRef, useEffect, useCallback } from 'react';
import { IFileTree } from '../interfaces/index.tsx';
import { BottomArrow, FilePlus, FolderPlus, RightArrow } from './SVG/index.tsx';
import FileIcon from './FileIcon.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store.ts';
import { setClickedFileAction, setOpenedFilesAction, setFileTreeAction } from '../app/features/fileTreeSliec.ts';
import { isFileExist } from '../utils/index.ts';
import DeleteContextMenu from './DeleteContextMenu.tsx';
import AlertModal from './AlertModal.tsx';

interface IRecursiveFileTree {
  fileTree: IFileTree;
}

const isValidFileName = (name: string) => /^[^\\/:*?"<>|]+\.[a-zA-Z0-9]+$/.test(name);
const isValidFolderName = (name: string) => /^[^\\/:*?"<>|]+$/.test(name);

const RecursiveFileTree = ({ fileTree }: IRecursiveFileTree) => {
  /*~~~~~~~~$ Destructure Props $~~~~~~~~*/
  const { name, isFolder, children, id, content } = fileTree;

  /*~~~~~~~~$ States $~~~~~~~~*/
  const [isOpen, setIsOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [addType, setAddType] = useState<'file' | 'folder' | null>(null);
  const [newName, setNewName] = useState('');
  const [error, setError] = useState('');
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  /*~~~~~~~~$ Refs $~~~~~~~~*/
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);


  /*~~~~~~~~$ Selectors $~~~~~~~~*/
  const { openedFiles, fileTree: globalFileTree } = useSelector((state: RootState) => state.tree);
  const dispatch = useDispatch();

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleFileClick = useCallback(() => {
    const fileExist = isFileExist(openedFiles, id);
    dispatch(setClickedFileAction({ fileName: name, fileContent: content || '', activeTabId: id }));
    if (!fileExist) {
      dispatch(setOpenedFilesAction([...openedFiles, fileTree]));
    }
  }, [dispatch, openedFiles, fileTree, name, content, id]);

  const handleAddClick = useCallback((type: 'file' | 'folder') => {
    setIsAdding(true);
    setAddType(type);
    setNewName('');
    setError('');
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
    setError('');
  }, []);

  const handleAddConfirm = useCallback(() => {
    if (addType === 'file' && !isValidFileName(newName)) {
      setError('Invalid file name or extension');
      return;
    }
    if (addType === 'folder' && !isValidFolderName(newName)) {
      setError('Invalid folder name');
      return;
    }

    const doesItemExist = (tree: IFileTree, parentId: string, name: string, isFolder: boolean): boolean => {
      if (tree.id === parentId && tree.children) {
        return tree.children.some(
          (child) => child.name === name && child.isFolder === isFolder
        );
      }
      return tree.children?.some((child) =>
        doesItemExist(child, parentId, name, isFolder)
      ) || false;
    };

    if (doesItemExist(globalFileTree, id, newName, addType === 'folder')) {
      setError(`${addType === 'folder' ? 'Folder' : 'File'} with this name already exists`);
      return;
    }

    const addNewItemToTree = (tree: IFileTree, parentId: string, newItem: IFileTree): IFileTree => {
      if (tree.id === parentId) {
        return {
          ...tree,
          children: [...(tree.children || []), newItem],
        };
      }

      return {
        ...tree,
        children: tree.children?.map((child) => addNewItemToTree(child, parentId, newItem)) || [],
      };
    };

    const updatedTree = addNewItemToTree(globalFileTree, id, {
      name: newName,
      isFolder: addType === 'folder',
      children: addType === 'folder' ? [] : undefined,
      id: `${id}-${newName}`,
      content: addType === 'file' ? '' : undefined,
    });

    dispatch(setFileTreeAction(updatedTree));
    setIsAdding(false);
    setAddType(null);
    setNewName('');
  }, [addType, newName, dispatch, globalFileTree, id]);


  const handleCancel = useCallback(() => {
    setIsAdding(false);
    setAddType(null);
    setNewName('');
    setError('');
  }, []);

  const handleOutsideClick = useCallback((e: MouseEvent) => {
    const addSection = document.querySelector('.recursive-file-tree__add-section');
    if (addSection && addSection.contains(e.target as Node)) {
      return; // Do nothing if click is inside the add section
    }
    handleCancel();
  }, [handleCancel]);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
    setShowContextMenu(true);
  };

  const handleDelete = () => {
    setIsAlertVisible(true);
    setShowContextMenu(false);
  };

  const confirmDelete = useCallback(() => {
    const deleteNodeFromTree = (tree: IFileTree, targetId: string): IFileTree | null => {
      if (tree.id === targetId) return null;

      if (tree.children) {
        const updatedChildren = tree.children
          .map((child) => deleteNodeFromTree(child, targetId))
          .filter(Boolean) as IFileTree[];

        return { ...tree, children: updatedChildren };
      }

      return tree;
    };

    const updatedTree = deleteNodeFromTree(globalFileTree, id);
    dispatch(setFileTreeAction(updatedTree!));
    setIsAlertVisible(false);
  }, [dispatch, globalFileTree, id]);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setShowContextMenu(false);
    }
  }, []);


  /*~~~~~~~~$ Effects $~~~~~~~~*/
  useEffect(() => {
    if (isAdding) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isAdding, handleOutsideClick]);

  return (
    <div className="recursive-file-tree">
      <div
        className="recursive-file-tree__button-wrapper"
        role="button"
        tabIndex={0}
        onClick={toggleOpen}
        onContextMenu={handleContextMenu}
      >
        {isFolder && (
          <div className="recursive-file-tree__arrow" aria-hidden="true" onClick={toggleOpen}>
            {isOpen ? <BottomArrow /> : <RightArrow />}
          </div>
        )}

        <div
          className="recursive-file-tree__file-name"
          role="button"
          tabIndex={0}
          onClick={() => !isFolder && handleFileClick()}
        >
          <FileIcon filename={name} isFolder={isFolder} isOpen={isOpen} />
          <span className="recursive-file-tree__file-text">{name}</span>
        </div>

        {isFolder && <div className="recursive-file-tree__add-controls">
          <button
            title="Add File"
            onClick={() => handleAddClick('file')}
            className="recursive-file-tree__add-button"
            aria-label="Add File"
          >
            <FilePlus />
          </button>
          <button
            title="Add Folder"
            onClick={() => handleAddClick('folder')}
            className="recursive-file-tree__add-button"
            aria-label="Add Folder"
          >
            <FolderPlus />
          </button>
        </div>}
      </div>

      {isFolder && isOpen && (
        <div className="recursive-file-tree__children" role="group">
          {isAdding && addType && (
            <div className="recursive-file-tree__add-section">
              <div className="relative">
                <input
                  ref={inputRef}
                  className="recursive-file-tree__input"
                  placeholder={addType === 'file' ? 'Enter file name...' : 'Enter folder name...'}
                  value={newName}
                  onChange={handleInputChange}
                  autoFocus
                />
                {error && <div className="recursive-file-tree__error-text">{error}</div>}
              </div>
              <div className="recursive-file-tree__action-buttons">
                <button
                  className="recursive-file-tree__confirm-button"
                  onClick={handleAddConfirm}
                >
                  Add
                </button>
                <button
                  className="recursive-file-tree__cancel-button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          {children?.map((child) => (
            <RecursiveFileTree key={child.id} fileTree={child} />
          ))}
        </div>
      )}

      {showContextMenu && (
        <DeleteContextMenu
          position={contextMenuPosition}
          handleDelete={handleDelete}
          menuRef={menuRef}
        />
      )}

      {isAlertVisible && (
        <AlertModal
          title="Confirm Deletion"
          message={`Are you sure you want to delete "${name}"? This action cannot be undone.`}
          onConfirm={confirmDelete}
          onCancel={() => setIsAlertVisible(false)}
        />
      )}
    </div>
  );
};

export default React.memo(RecursiveFileTree);
