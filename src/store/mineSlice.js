import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mineSum: 40,
};

export const mineSlice = createSlice({
  name: 'mine',
  initialState,
  reducers: {
    mineCounter: (state) => {
      state.mineSum = state.mineSum - 1;
    }
  }
});

export const { mineCounter } = mineSlice.actions;
export const mineCounterSelector = (state) => state.mine.mineSum;
export default mineSlice.reducer;
