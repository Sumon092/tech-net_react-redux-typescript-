import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    incrementByAmount: (state: counterState, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state: counterState) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
