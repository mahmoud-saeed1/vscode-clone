import React, { useState } from 'react'
import { IFileTree } from '../interfaces/index.tsx.tsx'
import { BottomArrow, ClosedFolder, File, OpenedFolder, RightArrow } from './SVG/File.tsx';

interface IRecursiveComponent {
    fileTree: IFileTree
}

const RecursiveFile = ({ fileTree }: IRecursiveComponent) => {
    const { name, isFolder, children } = fileTree;

    /*~~~~~~~~$ States $~~~~~~~~*/
    const [isOpeningFile, setIsOpeningFile] = useState<boolean>(true);


    /*~~~~~~~~$ Handlers $~~~~~~~~*/
    const OpeningToggle = () => setIsOpeningFile(prev => !prev)

    return (
        <div className='mb-2 ml-3' >
            <button className="flex items-center mb-2" onClick={OpeningToggle}>
                <div className="mr-2">
                    {isFolder ? <div>{isOpeningFile ? <div className='flex items-center space-x-2'><BottomArrow /><OpenedFolder /></div> : <div className='flex items-center space-x-2'><RightArrow /><ClosedFolder /></div>}</div> : <File />}
                </div>

                <span className="text-white font-semibold tracking-wider">
                    {name}
                </span>
            </button>
            {children && isOpeningFile && children.map((fileTree, idx) => (<RecursiveFile key={idx} fileTree={fileTree} />))}
        </div>
    )
}

export default RecursiveFile