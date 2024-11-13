import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFileTree } from "../../interfaces/index.tsx";

interface IClickedFile {
  fileName: string;
  fileContent: string;
}

interface IInitialState {
  openedFiles: IFileTree[];
  clickedFile: IClickedFile;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  },
};

const fileTreeSlice = createSlice({
  name: "filetree",
  initialState,
  reducers: {
    setOpenedFilesAction: (state, action: PayloadAction<IFileTree[]>) => {
      state.openedFiles = action.payload;
    },
  },
});

export const { setOpenedFilesAction } = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
