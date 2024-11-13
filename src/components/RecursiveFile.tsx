import React, { useState } from 'react';
import { IFileTree } from '../interfaces/index.tsx';
import { BottomArrow, RightArrow } from './SVG/File.tsx';
import FileIcon from './FileIcon.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../app/store.ts"
import { setOpenedFilesAction } from "../app/features/fileTreeSliec.ts";

interface IRecursiveFileTree {
  fileTree: IFileTree;
}

const RecursiveFileTree = ({ fileTree }: IRecursiveFileTree) => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const { name, isFolder, children } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /*~~~~~~~~$ Gloabal States $~~~~~~~~*/
  const { openedFiles } = useSelector(({ tree }: RootState) => tree)

  const dispatch = useDispatch();

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const toggleOpen = () => setIsOpen((prev) => !prev);


  return (
    <div className="mb-2 ml-3">
      <button className="flex items-center mb-2" onClick={toggleOpen}>

        {/*~~~~~~~~$ Folder Arrow $~~~~~~~~*/}
        {isFolder && (
          <div className="mr-2">
            {isOpen ? <BottomArrow /> : <RightArrow />}
          </div>
        )}
        <div className='flex items-center' onClick={() => !isFolder && dispatch(setOpenedFilesAction([...openedFiles, fileTree]))}><FileIcon filename={name} isFolder={isFolder} isOpen={isOpen} />
          <span className="text-white font-semibold tracking-wider ml-2">{name}</span></div>
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
