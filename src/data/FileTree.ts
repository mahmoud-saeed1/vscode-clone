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
            { id: uuid(), name: "react.js", isFolder: false, content: "" },
          ],
        },
        { id: uuid(), name: "index.html", isFolder: false, content: "" },
        {
          id: uuid(),
          name: "public",
          isFolder: true,
          content:"",
          children: [
            { id: uuid(), name: "index.html", isFolder: false, content: "" },
          ],
        },
      ],
    },
    { id: uuid(), name: "index.html", isFolder: false, content: "" },
  ],
};
