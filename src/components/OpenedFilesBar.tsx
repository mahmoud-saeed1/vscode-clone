import React, { useState, useCallback } from 'react';
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import OpenedFileTab from './OpenedFileTab';
import CloseContextMenu from './CloseContextMenu';

const OpenedFilesBar: React.FC = () => {
    /*~~~~~~~~$ States $~~~~~~~~*/
    const [contextMenuPosition, setContextMenuPosition] = useState<{ x: number; y: number }>({ x: 60, y: 20 });
    const [showContextMenu, setShowContextMenu] = useState<boolean>(false);

    /*~~~~~~~~$ Selectors $~~~~~~~~*/
    const { openedFiles } = useSelector(({ tree }: RootState) => tree);

    /*~~~~~~~~$ Handlers $~~~~~~~~*/
    const handleOpenContextMenu = useCallback(() => setShowContextMenu(true), []);
    const handleCloseContextMenu = useCallback(() => setShowContextMenu(false), []);

    const handleContextMenu = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            setContextMenuPosition({ x: e.clientX, y: e.clientY });
            handleOpenContextMenu();
        },
        [handleOpenContextMenu]
    );

    return (
        <div className="bg-gray-900">
            <ul
                onContextMenu={handleContextMenu}
                className="opened-files__container"
                role="list"
                aria-label="Opened Files"
            >
                {openedFiles.map((openedFile) => (
                    <OpenedFileTab key={openedFile.id} fileTree={openedFile} />
                ))}
            </ul>

            {showContextMenu && (
                <CloseContextMenu
                    dropMenuPosition={contextMenuPosition}
                    handleCloseDropMenu={handleCloseContextMenu}
                />
            )}
        </div>
    );
};

export default React.memo(OpenedFilesBar);
