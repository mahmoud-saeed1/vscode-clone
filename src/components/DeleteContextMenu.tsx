import React from 'react';

interface IDeleteContextMenu {
  position: { x: number; y: number };
  handleDelete: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
}

const DeleteContextMenu: React.FC<IDeleteContextMenu> = ({ position, handleDelete, menuRef }) => {
  return (
    <div
      ref={menuRef}
      className="delete-context-menu"
      style={{ top: position.y, left: position.x }}
    >
      <button className="delete-context-menu__item" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteContextMenu;
