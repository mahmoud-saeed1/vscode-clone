import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveFileTree from "./components/RecursiveFile";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <div className="bg-gray-900 h-svh flex">
      <ResizablePanel
        leftPanel={
          <div className="h-full flex flex-col space-y-2 p-4 bg-gray-800">
            <RecursiveFileTree fileTree={fileTree} />
          </div>
        }
        rightPanel={<OpenedFilesBar />}
        showLeftPanel
      />
    </div>
  );
}

export default App;
