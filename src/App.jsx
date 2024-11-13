import RecursiveFileTree from "./components/RecursiveFile";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <div className="bg-black h-svh">
      <RecursiveFileTree fileTree={fileTree} />
    </div>
  );
}

export default App;
