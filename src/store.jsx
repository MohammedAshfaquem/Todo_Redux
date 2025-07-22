import {configureStore} from "@reduxjs/toolkit"
import todos from './todoslice'
const store = configureStore({
  reducer:{
    todo:todos
  }
})

export default store;