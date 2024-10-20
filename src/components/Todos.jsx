import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch((err) => console.log(err));
  }, []); // if noting empty array will be set to the setTodos

  function dele(indextodel) {
    setTodos(todos.filter((x) => x.id !== indextodel)); // filter out the todo by id
  }

  return (
    <div>
      {todos.map((x) => (
        <div key={x.id}>
          {x.todo} <button onClick={() => dele(x.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
