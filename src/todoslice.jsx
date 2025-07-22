import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const asyncounter = createAsyncThunk("counter/async", async () => {
  return new Promise((resolve) => {
    try {
      setTimeout(() => {
        console.log("Button Clicked");
        resolve();
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  });
});

const counter = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value > 0 ? (state.value -= 1) : (state.value = 0);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncounter.fulfilled, (state, action) => {
      state.value += 1;
    });
  },
});

export const { increment, decrement, async } = counter.actions;
export default counter.reducer;
