// components/RecursiveFile.tsx
import React, { useState } from 'react';
import { IFileTree } from '../interfaces/index.tsx';
import { BottomArrow, RightArrow } from './SVG/File.tsx';
import FileIcon from './FileIcon.tsx';

interface IRecursiveFileTree {
  fileTree: IFileTree;
}

const RecursiveFileTree = ({ fileTree }: IRecursiveFileTree) => {
  const { name, isFolder, children } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="mb-2 ml-3">
      <button className="flex items-center mb-2" onClick={toggleOpen}>
        {isFolder && (
          <div className="mr-2">
            {isOpen ? <BottomArrow /> : <RightArrow />}
          </div>
        )}
        <FileIcon filename={name} isFolder={isFolder} isOpen={isOpen} />
        <span className="text-white font-semibold tracking-wider ml-2">{name}</span>
      </button>
      {isFolder && isOpen && children && (
        <div className="ml-4">
          {children.map((child, index) => (
            <RecursiveFileTree key={index} fileTree={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecursiveFileTree;
