import React, { useState } from 'react';
import FileIcon from './FileIcon.tsx';
import { IFileTree } from '../interfaces/index.tsx.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { setClickedFileAction, setOpenedFilesAction, setTabIdToRemoveAction } from '../app/features/fileTreeSliec.ts';
import { Close } from './SVG/index.tsx';
import { RootState } from '../app/store.ts';
import ContextMenu from './DropMenu.tsx';

interface IOpenedFileTab {
    fileTree: IFileTree;
}

const OpenedFileTab = ({ fileTree }: IOpenedFileTab) => {
    const { id = '', name = '', content = '' } = fileTree;
    const { clickedFile, openedFiles } = useSelector(({ tree }: RootState) => tree);

    const dispatch = useDispatch();

    const handleFileTabClick = () => {
        dispatch(setClickedFileAction({ fileName: name, fileContent: content, activeTabId: id }))
    }

    const handleRemoveFileTab = (TabId: string) => {
        const updatedFilesBar = openedFiles.filter(file => file.id !== TabId);

        // Get the first tab from the remaining files or reset clickedFile if no tabs remain
        const nextFileTab = updatedFilesBar[0] || { id: '', name: '', content: '' };

        // Update openedFiles state
        dispatch(setOpenedFilesAction(updatedFilesBar));

        // Update clickedFile state
        dispatch(setClickedFileAction({ fileName: nextFileTab.name || '', fileContent: nextFileTab.content || '', activeTabId: nextFileTab.id || '' }))
    };

    console.log(openedFiles)
    console.log(clickedFile)

    return (
        <>
            <li
                className={`relative flex items-center p-2 px-4 text-gray-300 border-x border-gray-700 transition duration-150 ease-in-out ${id === clickedFile.activeTabId ? 'bg-gray-900 border-t-orange-600 border-t-[3px]' : 'hover:bg-gray-800 border-t-transparent'}`}
                onClick={handleFileTabClick}
                onContextMenu={e => {
                    e.preventDefault();
                    dispatch(setTabIdToRemoveAction(id));
                }}
            >
                <FileIcon filename={name} />
                <p className="ml-2 text-sm truncate text-gray-200">{name}</p>

                <button title="Close file tab" onClick={e => { e.stopPropagation; handleRemoveFileTab(fileTree.id) }}><Close className='ml-2' /></button>

                {id === clickedFile.activeTabId && <div className='w-full h-1 absolute bg-gray-900 -bottom-1 left-0' />}
            </li >

        </>
    );
};

export default OpenedFileTab;