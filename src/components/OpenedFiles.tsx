import React, { useState, useCallback } from 'react';
import { IFileTree } from '../interfaces/index.tsx';
import { BottomArrow, Close, RightArrow } from './SVG/index.tsx';
import { useDispatch } from 'react-redux';
import { setClickedFileAction, setOpenedFilesAction } from '../app/features/fileTreeSliec.ts';
import FileIcon from './FileIcon.tsx';

interface IOpenedFiles {
    openedFiles: IFileTree[];
}

const OpenedFiles = ({ openedFiles }: IOpenedFiles) => {
    /*~~~~~~~~$ States $~~~~~~~~*/
    const [isOpen, setIsOpen] = useState<boolean>(true);

    /*~~~~~~~~$ Dispatch $~~~~~~~~*/
    const dispatch = useDispatch();

    /*~~~~~~~~$ Handlers $~~~~~~~~*/
    const handleToggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const handleRemoveFileTab = useCallback(
        (TabId: string) => {
            const updatedFilesBar = openedFiles.filter((file) => file.id !== TabId);

            // ** Get the first tab from the remaining files or reset clickedFile if no tabs remain
            const nextFileTab = updatedFilesBar[0] || { id: '', name: '', content: '' };

            // ** Update openedFiles state
            dispatch(setOpenedFilesAction(updatedFilesBar));

            // ** Update clickedFile state
            dispatch(
                setClickedFileAction({
                    fileName: nextFileTab.name || '',
                    fileContent: nextFileTab.content || '',
                    activeTabId: nextFileTab.id || '',
                })
            );
        },
        [dispatch, openedFiles]
    );

    const handleFileTabClick = useCallback(
        (fileName: string, fileContent: string, activeTabId: string) => {
            dispatch(setClickedFileAction({ fileName, fileContent, activeTabId }));
        },
        [dispatch]
    );

    return (
        <div className="opened-files" role="region" aria-label="Opened Files">
            <button
                className="opened-files__toggle"
                onClick={handleToggle}
                title="Toggle Open Editors"
            >
                <span>{isOpen ? <BottomArrow aria-hidden="true" /> : <RightArrow aria-hidden="true" />}</span> Open Editors
            </button>
            {isOpen && (
                <ul className="opened-files__list" role="list">
                    {openedFiles.map((file) => (
                        <li key={file.id} className="opened-files__item" role="listitem">
                            <button
                                className="opened-files__close-button text-gray-300"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveFileTab(file.id);
                                }}
                                title={`Close ${file.name}`}
                                aria-label={`Close ${file.name}`}
                            >
                                <Close aria-hidden="true" />
                            </button>
                            <button
                                className="opened-files__name"
                                onClick={() => handleFileTabClick(file.name || '', file.content || '', file.id || '')}
                                title={`Open ${file.name}`}
                                aria-label={`Open ${file.name}`}
                            >
                                <FileIcon
                                    className="mr-2"
                                    filename={file.name}
                                    isFolder={false}
                                    isOpen={isOpen}
                                    aria-hidden="true"
                                />
                                {file.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default React.memo(OpenedFiles);
