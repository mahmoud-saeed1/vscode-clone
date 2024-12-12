import React, { useState, useRef, useEffect } from 'react';
import { IFileTree } from '../interfaces/index.tsx';
import { BottomArrow, FilePlus, FolderPlus, RightArrow } from './SVG/index.tsx';
import FileIcon from './FileIcon.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store.ts';
import { setClickedFileAction, setOpenedFilesAction, setFileTreeAction } from '../app/features/fileTreeSliec.ts';
import { isFileExist } from '../utils/index.ts';

interface IRecursiveFileTree {
  fileTree: IFileTree;
}

const isValidFileName = (name: string) => /^[^\\/:*?"<>|]+\.[a-zA-Z0-9]+$/.test(name);
const isValidFolderName = (name: string) => /^[^\\/:*?"<>|]+$/.test(name);

const RecursiveFileTree = ({ fileTree }: IRecursiveFileTree) => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const { name, isFolder, children, id, content } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [addType, setAddType] = useState<'file' | 'folder' | null>(null);
  const [newName, setNewName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  /*~~~~~~~~$ Global States $~~~~~~~~*/
  const { openedFiles, fileTree: globalFileTree } = useSelector(({ tree }: RootState) => tree);
  const dispatch = useDispatch();

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleFileClick = () => {
    const fileExist = isFileExist(openedFiles, id);
    dispatch(setClickedFileAction({ fileName: name, fileContent: content || '', activeTabId: id }));
    if (!fileExist) {
      dispatch(setOpenedFilesAction([...openedFiles, fileTree]));
    }
  };

  const handleAddClick = (type: 'file' | 'folder') => {
    setIsAdding(true);
    setAddType(type);
    setNewName('');
    setError('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
    setError('');
  };

  const handleAddConfirm = () => {
    if (addType === 'file' && !isValidFileName(newName)) {
      setError('Invalid file name or extension');
      return;
    }
    if (addType === 'folder' && !isValidFolderName(newName)) {
      setError('Invalid folder name');
      return;
    }

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
  };

  const handleCancel = () => {
    setIsAdding(false);
    setAddType(null);
    setNewName('');
    setError('');
  };

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

  const handleOutsideClick = (e: MouseEvent) => {
    const addSection = document.querySelector('.recursive-file-tree__add-section');
    if (addSection && addSection.contains(e.target as Node)) {
      return; // Do nothing if click is inside the add section
    }
    handleCancel();
  };

  useEffect(() => {
    if (isAdding) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isAdding]);

  return (
    <div className="recursive-file-tree">
      <div
        className="recursive-file-tree__button-wrapper"
        role="button"
        tabIndex={0}
        onClick={toggleOpen}
      >
        {/*~~~~~~~~$ Folder Arrow $~~~~~~~~*/}
        {isFolder && (
          <div className="recursive-file-tree__arrow">
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

        <div className="recursive-file-tree__add-controls">
          <div
            role="button"
            tabIndex={0}
            title="Add File"
            onClick={() => handleAddClick('file')}
            className="recursive-file-tree__add-button"
          >
            <FilePlus />
          </div>
          <div
            role="button"
            tabIndex={0}
            title="Add Folder"
            onClick={() => handleAddClick('folder')}
            className="recursive-file-tree__add-button"
          >
            <FolderPlus />
          </div>
        </div>
      </div>

      {isFolder && isOpen && (
        <div className="recursive-file-tree__children">
          {isAdding && addType && (
            <div className="recursive-file-tree__add-section ">
              <div className='relative'>
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
          {children?.map((child, index) => (
            <RecursiveFileTree key={index} fileTree={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecursiveFileTree;