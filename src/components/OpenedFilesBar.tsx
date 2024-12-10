import React, { useState } from 'react';
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import OpenedFileTab from './OpenedFileTab';
import ContextMenu from './DropMenu';

const OpenedFilesBar = () => {
    const [ContextMenuPosition, setContextMenuPosition] = useState<{ x: number, y: number }>({ x: 60, y: 20 });
    const [showContextMenu, setShowContextMenu] = useState<boolean>(false)

    const { openedFiles } = useSelector(({ tree }: RootState) => tree);

    const handleOPenDropMenu = () => { setShowContextMenu(true) }
    const handleCloseDropMenu = () => { setShowContextMenu(false) }

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setContextMenuPosition({ x: e.clientX, y: e.clientY });
        handleOPenDropMenu();
    }

    return (
        <div className='bg-gray-900'>
            <ul onContextMenu={e => { e.preventDefault(); handleContextMenu(e) }} className="bg-black h-fit flex items-center border-y-2 border-gray-700">
                {openedFiles.map((openedFile) => (
                    <OpenedFileTab key={openedFile.id} fileTree={openedFile} />
                ))}
            </ul>

            {showContextMenu && <ContextMenu dropMenuPosition={ContextMenuPosition} handleCloseDropMenu={handleCloseDropMenu} />}
        </div>
    );
};

export default OpenedFilesBar;

