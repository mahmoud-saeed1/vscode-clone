interface IFileTree {
  name: string;
  isFolder: boolean;
  children?: IFileTree[]; //! only for folders
  content?: string; //! only for files
}

export const fileTree: IFileTree = {
  name: "VS Code Clone",
  isFolder: true,
  children: [
    { name: "node_modules", isFolder: false },
    { name: "index.html", isFolder: false },
  ],
};
