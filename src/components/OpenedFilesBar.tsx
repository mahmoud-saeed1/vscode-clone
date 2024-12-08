import React from 'react';
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import OpenedFileTab from './OpenedFileTab';

const OpenedFilesBar = () => {
    const { openedFiles, clickedFile } = useSelector(({ tree }: RootState) => tree);

    return (
        <div className='bg-gray-900 w-full h-screen'>
            <ul className="bg-black h-fit flex items-center border-y-2 border-gray-700">
                {openedFiles.map((openedFile) => (
                    <OpenedFileTab key={openedFile.id} fileTree={openedFile} />
                ))}
            </ul>

            <p className='text-white p-4'>
            {clickedFile.fileContent}
            </p>
        </div>
    );
};

export default OpenedFilesBar;