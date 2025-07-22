import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "Todo",
  initialState: [],
  reducers: {
    addtodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    delettodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    edittodo: (state, action) => {
      const { id, newtext } = action.payload;
      const todo = state.find((item) => item.id === id);

      if (todo) {
        todo.text = newtext;
      }
    },
  },
});

export const { addtodo, delettodo,edittodo } = todos.actions;

export default todos.reducer;
