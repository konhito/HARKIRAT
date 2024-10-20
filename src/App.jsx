import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Header title="Todo List app"></Header>
      {/* <Form></Form> */}
      <Todos></Todos>
    </>
  );
}

export default App;
