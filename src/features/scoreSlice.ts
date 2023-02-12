import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "score",
  initialState: {
    accuracy: 100,
    hits: 0,
    misses: 0,
  },
  reducers: {
    hit(state) {
      state.hits++;
    },
    miss(state) {
      state.misses++;
    },
    updateAccuracy(state) {
      state.accuracy = (state.hits / (state.hits + state.misses)) * 100;
    },
  },
});

export const { hit, miss, updateAccuracy } = scoreSlice.actions;

export default scoreSlice.reducer;
