import { createSlice } from "@reduxjs/toolkit";

interface counterState {
  count: number;
}
const initialState: counterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: counterState) => {
      state.count = state.count + 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
