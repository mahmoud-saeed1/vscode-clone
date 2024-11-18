import React from 'react'
import { IFileTree } from '../interfaces/index.tsx'
import { useSelector } from 'react-redux';
import { RootState } from '../app/store.ts';
import { isFileExist } from '../utils';
import FileIcon from './FileIcon';
import { fileTree } from '../data/FileTree.ts';


const OpenedFilePath = () => {
    const { clickedFile, openedFiles } = useSelector(({ tree }: RootState) => tree);
    const { children, name } = fileTree;
    return (
        <div>
            <div className='flex items-center space-x-1'>
                {/* <FileIcon filename={name} /> */}
                <p> {name}</p>
            </div>

            {/* {children && (

                <div className="ml-4">
                    {children.map((child, index) => (
                        <OpenedFilePath key={index} />
                    ))}
                </div>
            )} */}
        </div>
    )
}

export default OpenedFilePath