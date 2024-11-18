import React from 'react';
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import OpenedFileTab from './OpenedFileTab';
import { IFileTree } from '../interfaces/index.tsx';

interface IOpenedFilesBar {
    fileTree: IFileTree;
}
const OpenedFilesBar = ({ fileTree }: IOpenedFilesBar) => {
    const { openedFiles, clickedFile } = useSelector(({ tree }: RootState) => tree);

    return (
        <div className='bg-gray-900 w-full h-screen'>
            <ul className="bg-black h-fit flex items-center border-y-2 border-gray-700">
                {openedFiles.map((openedFile) => (
                    <OpenedFileTab key={openedFile.id} fileTree={openedFile} />
                ))}
            </ul>

            
            {clickedFile.fileContent}
        </div>
    );
};

export default OpenedFilesBar;