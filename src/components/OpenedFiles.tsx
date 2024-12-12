import React from 'react'
import { IFileTree } from '../interfaces/index.tsx';
import { BottomArrow, Close, RightArrow } from './SVG/index.tsx';
import { useDispatch } from 'react-redux';
import { setClickedFileAction, setOpenedFilesAction } from '../app/features/fileTreeSliec.ts';
import FileIcon from './FileIcon.tsx';

interface IOpenedFiles {
    openedFiles: IFileTree[];
}

const OpenedFiles = ({ openedFiles }: IOpenedFiles) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(true);

    const dispatch = useDispatch();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleRemoveFileTab = (TabId: string) => {
        const updatedFilesBar = openedFiles.filter(file => file.id !== TabId);

        // Get the first tab from the remaining files or reset clickedFile if no tabs remain
        const nextFileTab = updatedFilesBar[0] || { id: '', name: '', content: '' };

        // Update openedFiles state
        dispatch(setOpenedFilesAction(updatedFilesBar));

        // Update clickedFile state
        dispatch(setClickedFileAction({ fileName: nextFileTab.name || '', fileContent: nextFileTab.content || '', activeTabId: nextFileTab.id || '' }))
    };

    const handleFileTabClick = (fileName: string, fileContent: string, activeTabId: string) => {
        dispatch(setClickedFileAction({ fileName: fileName, fileContent: fileContent, activeTabId: activeTabId }))
    }
    return (
        <div className="opened-files">
            <button className="opened-files__toggle" onClick={handleToggle}>
                <span>{isOpen ? <BottomArrow /> : <RightArrow />}</span> Open Editors
            </button>
            {isOpen && (
                <ul className="opened-files__list">
                    {openedFiles.map((file) => (
                        <li key={file.id} className="opened-files__item">
                            <button
                                className="opened-files__close-button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveFileTab(file.id);
                                }}
                                title="Close"
                            >
                                <Close />
                            </button>
                            <button
                                className="opened-files__name"
                                onClick={() => handleFileTabClick(file.name || '', file.content || '', file.id || '')}
                            >
                               <FileIcon className='mr-2' filename={file.name} isFolder={false} isOpen={isOpen} /> {file.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default OpenedFiles