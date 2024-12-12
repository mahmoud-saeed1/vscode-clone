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
    const { clickedFile, openedFiles } = useSelector((state: RootState) => state.tree);
    const dispatch = useDispatch();

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
            className={`opened-file-tab ${id === clickedFile.activeTabId ? 'opened-file-tab--active' : 'opened-file-tab--hover'}`}
            onClick={handleFileTabClick}
            onContextMenu={handleContextMenu}
        >
            <FileIcon className="opened-file-tab__icon" filename={name} />
            <p className="opened-file-tab__name">{name}</p>
            <button
                title="Close file tab"
                onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFileTab(id);
                }}
                className="opened-file-tab__close-button"
            >
                <Close />
            </button>

            {id === clickedFile.activeTabId && (
                <div className="opened-file-tab__indicator" />
            )}
        </li>
    );
};

export default React.memo(OpenedFileTab);