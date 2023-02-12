import { configureStore } from "@reduxjs/toolkit";
import keySlice from "../features/keySlice";
import scoreSlice from "../features/scoreSlice";

export const store = configureStore({
  reducer: {
    keySlice,
    scoreSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
