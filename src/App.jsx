import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncounter, decrement, increment } from "./todoslice";
function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>{value}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <br />

      <button onClick={() => dispatch(asyncounter())}>Async Counter </button>
    </>
  );
}

export default App;
