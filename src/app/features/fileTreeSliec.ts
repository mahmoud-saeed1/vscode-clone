import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFileTree } from "../../interfaces/index.tsx";
import { fileTree } from "../../data/FileTree.ts";

interface IClickedFile {
  fileName: string;
  fileContent: string;
  activeTabId: string;
}

interface IInitialState {
  openedFiles: IFileTree[];
  clickedFile: IClickedFile;
  tabIdToRemove: string;
  fileTree: IFileTree;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
    activeTabId: "",
  },
  tabIdToRemove: "",
  fileTree: fileTree,
};

const fileTreeSlice = createSlice({
  name: "filetree",
  initialState,
  reducers: {
    setOpenedFilesAction: (state, action: PayloadAction<IFileTree[]>) => {
      state.openedFiles = action.payload;
    },

    setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },

    setTabIdToRemoveAction: (state, action: PayloadAction<string>) => {
      state.tabIdToRemove = action.payload;
    },

    setFileTreeAction: (state, action: PayloadAction<IFileTree>) => {
      state.fileTree = action.payload;
    },
  },
});

export const {
  setOpenedFilesAction,
  setClickedFileAction,
  setTabIdToRemoveAction,
  setFileTreeAction
} = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
