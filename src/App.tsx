import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import ResizablePanel from './components/ResizablePanel';
import RecursiveFileTree from "./components/RecursiveFile";
import { fileTree } from "./data/FileTree";
import OpenedFilesPreview from './components/OpenedFilesPreview';
import WelcomeTab from './components/WelcomeTab';
import SideBarMenu from './components/SideBarMenu';


const App = () => {
  const { openedFiles } = useSelector(({ tree }: RootState) => tree);
  return (
    <div className="bg-gray-900 h-svh flex">
      <ResizablePanel
        leftPanel={<div className="h-full flex flex-col space-y-2 p-4 bg-gray-800"><SideBarMenu /></div>}
        rightPanel={openedFiles.length ? <OpenedFilesPreview /> : <WelcomeTab />}
        showLeftPanel
      />
    </div>
  )
}

export default App