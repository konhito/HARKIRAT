import "./App.css";

function App() {
  return (
    <>
      <Todo title="Gym" description="go to gym in the morning " done={false} />
      <Todo title="Gym" description="go to gym in the morning " done={false} />
      <Todo title="Gym" description="go to gym in the morning " done={false} />
    </>
  );
}

interface Todoprop {
  title: string;
  description: string;
  done: boolean;
}

function Todo(props: Todoprop) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
