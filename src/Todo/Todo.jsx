import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);
  const handleAdd = () => {
    setData(todo);
    setTodo("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Write plan Here!"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <h3> {data} </h3>
      </div>
    </div>
  );
};
export default Todo;
