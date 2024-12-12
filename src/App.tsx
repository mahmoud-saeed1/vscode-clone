import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import ResizablePanel from './components/ResizablePanel';
import OpenedFilesPreview from './components/OpenedFilesPreview';
import WelcomeTab from './components/WelcomeTab';
import SideBarMenu from './components/SideBarMenu';


const App = () => {
  const { openedFiles } = useSelector(({ tree }: RootState) => tree);
  return (
    <div className="main">
      <ResizablePanel
        leftPanel={<div className="resizable-panel"><SideBarMenu /></div>}
        rightPanel={openedFiles.length ? <OpenedFilesPreview /> : <WelcomeTab />}
        showLeftPanel
      />
    </div>
  )
}

export default App