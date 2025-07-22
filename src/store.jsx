import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./todoslice";
import {thunk} from 'redux-thunk'
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  
});
export default store;
