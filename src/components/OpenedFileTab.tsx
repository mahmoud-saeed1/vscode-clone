import React from 'react';
import FileIcon from './FileIcon.tsx';
import { IFileTree } from '../interfaces/index.tsx.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { setClickedFileAction } from '../app/features/fileTreeSliec.ts';
import { Close } from './SVG/index.tsx';
import { RootState } from '../app/store.ts';
import OpenedFilePath from './OpenedFilePath.tsx';

interface IOpenedFileTab {
    fileTree: IFileTree;
}

const OpenedFileTab = ({ fileTree }: IOpenedFileTab) => {
    const { id = '', name = '', content = '' } = fileTree;
    const { clickedFile } = useSelector(({ tree }: RootState) => tree);

    const dispatch = useDispatch();
    return (
        <li
            className={`relative flex items-center p-2 px-4 text-gray-300 border-x border-gray-700 transition duration-150 ease-in-out ${id === clickedFile.activeTabId ? 'bg-gray-900 border-t-orange-600 border-t-[3px]' : 'hover:bg-gray-800 border-t-transparent'}`}
            onClick={() => dispatch(setClickedFileAction({ fileName: name, fileContent: content, activeTabId: id }))}
        >
            <FileIcon filename={name} />
            <p className="ml-2 text-sm truncate text-gray-200">{name}</p>

            <Close className='ml-2' />

            {id === clickedFile.activeTabId && <div className='w-full h-1 absolute bg-gray-900 -bottom-1 left-0' />}
        </li>
    );
};

export default OpenedFileTab;