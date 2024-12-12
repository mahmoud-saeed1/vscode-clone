import React from 'react';
import FileIcon from './FileIcon.tsx';
import { IFileTree } from '../interfaces/index.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { setClickedFileAction, setOpenedFilesAction, setTabIdToRemoveAction } from '../app/features/fileTreeSliec.ts';
import { Close } from './SVG/index.tsx';
import { RootState } from '../app/store.ts';

interface IOpenedFileTab {
    fileTree: IFileTree;
}

const OpenedFileTab: React.FC<IOpenedFileTab> = ({ fileTree }) => {
    const { id = '', name = '', content = '' } = fileTree;

    /*~~~~~~~~$ Selectors $~~~~~~~~*/
    const { clickedFile, openedFiles } = useSelector((state: RootState) => state.tree);
    const dispatch = useDispatch();

    /*~~~~~~~~$ Handlers $~~~~~~~~*/
    const handleFileTabClick = () => {
        dispatch(setClickedFileAction({ fileName: name, fileContent: content, activeTabId: id }));
    };

    const handleRemoveFileTab = (tabId: string) => {
        const updatedFiles = openedFiles.filter((file) => file.id !== tabId);
        const nextFile = updatedFiles[0] || { id: '', name: '', content: '' };

        dispatch(setOpenedFilesAction(updatedFiles));
        dispatch(setClickedFileAction({ fileName: nextFile.name || '', fileContent: nextFile.content || '', activeTabId: nextFile.id || '' }));
    };

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        dispatch(setTabIdToRemoveAction(id));
    };

    return (
        <li
            className={`relative flex items-center p-2 px-4 text-gray-300 border-x border-gray-700 transition duration-150 ease-in-out ${id === clickedFile.activeTabId
                    ? 'bg-gray-900 border-t-orange-600 border-t-[3px]'
                    : 'hover:bg-gray-800 border-t-transparent'
                }`}
            onClick={handleFileTabClick}
            onContextMenu={handleContextMenu}
        >
            <FileIcon filename={name} />
            <p className="ml-2 text-sm truncate text-gray-200">{name}</p>
            <button
                title="Close file tab"
                onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFileTab(id);
                }}
                className="ml-2"
            >
                <Close />
            </button>

            {id === clickedFile.activeTabId && (
                <div className="w-full h-1 absolute bg-gray-900 -bottom-1 left-0" />
            )}
        </li>
    );
};

export default React.memo(OpenedFileTab);
