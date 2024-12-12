import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setOpenedFilesAction } from '../app/features/fileTreeSliec';

interface IContextMenu {
    dropMenuPosition: { x: number; y: number };
    handleCloseDropMenu: () => void;
}

const ContextMenu: React.FC<IContextMenu> = ({ dropMenuPosition, handleCloseDropMenu }) => {
    const { x, y } = dropMenuPosition;

    const menuRef = useRef<HTMLDivElement>(null);

    const { openedFiles, tabIdToRemove } = useSelector(({ tree }: RootState) => tree);

    const dispatch = useDispatch();

    const handleCloseAll = () => {
        dispatch(setOpenedFilesAction([]));
        handleCloseDropMenu();
    };

    const handleCloseTab = () => {
        const updatedFilesBar = openedFiles.filter(file => file.id !== tabIdToRemove);

        dispatch(setOpenedFilesAction(updatedFilesBar));
        handleCloseDropMenu();
    };



    // Close the context menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                handleCloseDropMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleCloseDropMenu]);

    return (
        <div ref={menuRef}>
            <ul
                className="drop-menu bg-gray-950 text-gray-200 shadow-lg rounded-md absolute"
                style={{ left: `${x}px`, top: `${y}px` }}
            >
                <li className="drop-menu__item">
                    <button className="drop-menu__button" onClick={handleCloseTab}>
                        Close
                    </button>
                </li>
                <li className="drop-menu__item">
                    <button className="drop-menu__button" onClick={handleCloseAll}>
                        Close All
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ContextMenu;