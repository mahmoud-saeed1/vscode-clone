import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveFileTree from "./components/RecursiveFile";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <div className="bg-gray-900 h-svh flex">
      <div className="w-64 border-r-2 border-white flex flex-col space-y-2 p-4 bg-gray-800 rounded-lg shadow-lg">
        <RecursiveFileTree fileTree={fileTree} />
      </div>

      <OpenedFilesBar fileTree={fileTree} />
    </div>
  );
}

export default App;
