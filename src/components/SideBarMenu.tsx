import React from 'react'
import RecursiveFileTree from './RecursiveFile'
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import OpenedFiles from './OpenedFiles';

const SideBarMenu = () => {
    const { fileTree, openedFiles } = useSelector(({ tree }: RootState) => tree);

    return (
        <>
            {openedFiles.length > 0 && <OpenedFiles openedFiles={openedFiles} />}
            <RecursiveFileTree fileTree={fileTree} />
        </>
    )
}

export default SideBarMenu