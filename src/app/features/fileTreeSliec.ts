import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFileTree } from "../../interfaces/index.tsx";

interface IClickedFile {
  fileName: string;
  fileContent: string;
  activeTabId: string;
}

interface IInitialState {
  openedFiles: IFileTree[];
  clickedFile: IClickedFile;
  tabIdToRemove: string;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
    activeTabId: "",
  },
  tabIdToRemove: "",
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
  },
});

export const { setOpenedFilesAction, setClickedFileAction, setTabIdToRemoveAction } =
  fileTreeSlice.actions;

export default fileTreeSlice.reducer;
