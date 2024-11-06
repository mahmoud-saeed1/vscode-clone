import FileComponent from "./components/FileComponent";
import FolderComponent from "./components/FolderComponent";

function App() {
  return (
    <div className="bg-black h-svh">
      <FileComponent fileName="index.html" />
      <FolderComponent folderName="node_modules" />
    </div>
  );
}

export default App;
