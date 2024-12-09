import { IFileTree } from "../interfaces/index.tsx";
import { v4 as uuid } from "uuid";

export const fileTree: IFileTree = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  content: "",
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      content: "",
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          content: "",
          children: [
            { id: uuid(), name: "react.js", isFolder: false, content: "console.log('Hello, World!');" },
            { id: uuid(), name: "vite.config.js", isFolder: false, content: "import { defineConfig } from 'vite';\n\nexport default defineConfig({\n  root: './src',\n  build: {\n    outDir: '../dist',\n  },\n});" },
          ],
        },
        { id: uuid(), name: "@types", isFolder: true, content: "", children: [] },
        { id: uuid(), name: "react", isFolder: true, content: "", children: [] },
        { id: uuid(), name: "react-dom", isFolder: true, content: "", children: [] },
      ],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      content: "",
      children: [
        { id: uuid(), name: "index.html", isFolder: false, content: "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'/><meta name='viewport' content='width=device-width, initial-scale=1.0'/><title>VS Code Clone</title></head><body><div id='app'></div></body></html>" },
        { id: uuid(), name: "favicon.ico", isFolder: false, content: "" },
        { id: uuid(), name: "manifest.json", isFolder: false, content: "{\n  \"name\": \"VS Code Clone\",\n  \"short_name\": \"VS Code\",\n  \"start_url\": \".\",\n  \"display\": \"standalone\",\n  \"background_color\": \"#ffffff\",\n  \"theme_color\": \"#000000\"\n}" },
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      content: "",
      children: [
        { id: uuid(), name: "index.tsx", isFolder: false, content: "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nimport './styles/App.css';\n\nReactDOM.render(<App />, document.getElementById('app'));" },
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          content: "",
          children: [
            { id: uuid(), name: "App.tsx", isFolder: false, content: "import React from 'react';\nimport Header from './Header';\nimport './App.css';\n\nconst App = () => {\n  return (\n    <div>\n      <Header />\n      <main>\n        <h2>Welcome to the VS Code Clone</h2>\n        <p>This is a demo of a simple code editor built with React.</p>\n      </main>\n    </div>\n  );\n};\n\nexport default App;" },
            { id: uuid(), name: "Header.tsx", isFolder: false, content: "import React from 'react';\n\nconst Header = () => {\n  return (\n    <header>\n      <h1>My VS Code Clone</h1>\n      <nav>\n        <ul>\n          <li><a href='#'>File</a></li>\n          <li><a href='#'>Edit</a></li>\n          <li><a href='#'>View</a></li>\n        </ul>\n      </nav>\n    </header>\n  );\n};\n\nexport default Header;" },
            { id: uuid(), name: "FileExplorer.tsx", isFolder: false, content: "import React from 'react';\n\nconst FileExplorer = () => {\n  return (\n    <aside>\n      <h2>File Explorer</h2>\n      <ul>\n        <li>src</li>\n        <li>public</li>\n        <li>node_modules</li>\n      </ul>\n    </aside>\n  );\n};\n\nexport default FileExplorer;" },
            { id: uuid(), name: "Footer.tsx", isFolder: false, content: "import React from 'react';\n\nconst Footer = () => {\n  return (\n    <footer>\n      <p>&copy; 2024 VS Code Clone</p>\n    </footer>\n  );\n};\n\nexport default Footer;" },
          ],
        },
        {
          id: uuid(),
          name: "styles",
          isFolder: true,
          content: "",
          children: [
            { id: uuid(), name: "App.css", isFolder: false, content: "body { font-family: Arial, sans-serif; margin: 0; padding: 0; } h1 { color: #333; } main { padding: 20px; } header { background: #282c34; color: white; padding: 10px; } nav ul { list-style: none; padding: 0; } nav ul li { display: inline; margin-right: 10px; }" },
            { id: uuid(), name: "Header.css", isFolder: false, content: "header { display: flex; justify-content: space-between; align-items: center; }" },
            { id: uuid(), name: "Footer.css", isFolder: false, content: "footer { text-align: center; padding: 10px; background: #282c34; color: white; position: relative; bottom: 0; width: 100%; }" },
          ],
        },
      ],
    },
    { id: uuid(), name: "README.md", isFolder: false, content: "# VS Code Clone\nThis is a clone of VS Code built with React and TypeScript.\n\n## Features\n- File Explorer\n- Code Editing\n- Syntax Highlighting\n\n## Installation\n1. Clone the repo\n2. Run `npm install`\n3. Start the app with `npm run dev`" },
  ],
};