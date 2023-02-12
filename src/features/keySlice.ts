import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shuffleArray } from "../utils";

type Keys = string[];

const initialState: Keys = [];

export const postSlice = createSlice({
  name: "key",
  initialState,
  reducers: {
    generateKeys(_, action: PayloadAction<{ arr: Keys; length: number }>) {
      return shuffleArray(action.payload.arr, action.payload.length);
    },
  },
});

export const { generateKeys } = postSlice.actions;

export default postSlice.reducer;
