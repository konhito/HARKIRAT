import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    if (fetchData) {
      fetch("https://dummyjson.com/todos")
        .then(async (res) => {
          const json = await res.json();
          setTodos(json.todos);
        })
        .catch((err) => console.log(err))
        .finally(() => setFetchData(false)); // Reset fetchData after fetching
    }
  }, [fetchData]);

  function dele(indextodel) {
    setTodos(todos.filter((x) => x.id !== indextodel));
  }

  return (
    <div>
      <button onClick={() => setFetchData(true)}>
        Click to re-fetch the data
      </button>
      {todos.map((x) => (
        <div key={x.id}>
          {x.todo} <button onClick={() => dele(x.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
