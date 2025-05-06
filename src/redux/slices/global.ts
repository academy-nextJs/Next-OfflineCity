import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme } = globalSlice.actions;

export default globalSlice.reducer;
