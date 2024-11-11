import RecursiveFile from "./components/RecursiveFile";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <div className="bg-black h-svh">
      <RecursiveFile fileTree={fileTree} />
    </div>
  );
}

export default App;
