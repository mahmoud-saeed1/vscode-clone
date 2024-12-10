import { X } from 'lucide-react';
import React from 'react';

interface IContextMenu {
    dropMenuPosition: { x: number; y: number };
    handleCloseDropMenu: () => void;
}

const ContextMenu: React.FC<IContextMenu> = ({ dropMenuPosition, handleCloseDropMenu }) => {
    const { x, y } = dropMenuPosition;

    const handleCloseAll = () => {
        console.log('close all');
    };

    return (
        <ul
            className="drop-menu bg-gray-950 text-gray-200 shadow-lg rounded-md absolute"
            style={{ left: `${x}px`, top: `${y}px` }}
        >
            <li className="drop-menu__item">
                <button className="drop-menu__button" onClick={handleCloseDropMenu}>
                    Close
                </button>
            </li>
            <li className="drop-menu__item">
                <button className="drop-menu__button" onClick={handleCloseAll}>
                    Close All
                </button>
            </li>
        </ul>
    );
};

export default ContextMenu;