import { IFileTree } from "../interfaces/index.tsx";
import { v4 as uuid } from "uuid";

export const fileTree: IFileTree = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [{ id: uuid(), name: "react.js", isFolder: false }],
        },
        { id: uuid(), name: "index.html", isFolder: false },
        {
          id: uuid(),
          name: "public",
          isFolder: true,
          children: [{ id: uuid(), name: "index.html", isFolder: false }],
        },
      ],
    },
    { id: uuid(), name: "index.html", isFolder: false },
  ],
};
