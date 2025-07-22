import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, delettodo, edittodo } from "./todoslice";
function App() {
  const [value, setInput] = useState("");
  const [editId, setEditid] = useState(null);
  const [edittext, setEditText] = useState("");
  const todolist = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleadd = () => {
    dispatch(addtodo(value));
    setInput("");
  };

  const handledelete = (id) => {
    dispatch(delettodo(id));
  };

  const handleedit = (id, currentext) => {
    setEditText(currentext);
    setEditid(id);
  };

  const handleupdate = (id) => {
    dispatch(edittodo({ id, newtext: edittext }));
    setEditid(null);
    setEditText("");
  };
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter A text"
      />
      <button onClick={handleadd}>Submit</button>

      <ul>
        {todolist.map((item) => (
          <li key={item.id}>
            {editId == item.id ? (
              <>
                {" "}
                <input
                  type="text"
                  value={edittext}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleupdate(item.id)}>update</button>
              </>
            ) : (
              <>
                {item.text}{" "}
                <button onClick={() => handleedit(item.id, item.text)}>
                  Edit
                </button>{" "}
                <button onClick={() => handledelete(item.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
