import { IFileTree } from "../interfaces/index.tsx";

export const fileTree: IFileTree = {
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".vite",
          isFolder: true,
          children: [{ name: "react.js", isFolder: false }],
        },
        { name: "index.html", isFolder: false },
        {
          name: "public",
          isFolder: true,
          children: [{ name: "index.html", isFolder: false }],
        },
      ],
    },
    { name: "index.html", isFolder: false },
  ],
};
