import { IFileTree } from "../interfaces/index.tsx";

interface IISFileFound {
  fileTree: IFileTree[];
  id: string;
}

export const isFileExist = (openedFiles: IFileTree[], id: string): boolean => {
  return openedFiles.some((file) => file.id === id);
};
