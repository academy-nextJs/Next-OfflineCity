import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
  transactionType: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme);
    },
    setTransactionType: (state, action: PayloadAction<string>) => {
      state.transactionType = action.payload;
    },
  },
});

export const { toggleTheme, setTransactionType } = globalSlice.actions;

export default globalSlice.reducer;
