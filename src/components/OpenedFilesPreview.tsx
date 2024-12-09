import React from 'react'
import OpenedFilesBar from './OpenedFilesBar'
import ContentSyntaxHighlighter from './ContentSyntaxHighlighter'
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const OpenedFilesPreview = () => {
    const { openedFiles, clickedFile } = useSelector(({ tree }: RootState) => tree);

    return (
        <div>
            <OpenedFilesBar />
            <ContentSyntaxHighlighter content={`${clickedFile.fileContent}`} />
        </div>
    )
}

export default OpenedFilesPreview