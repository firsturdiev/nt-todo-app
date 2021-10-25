import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodosList from "./components/TodosList/TodosList";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  return (
    <main className="main">
      <h1 className="main__title">Simple todo app</h1>

      <AddTodo todos={todos} setTodos={setTodos} />

      <TodosList todos={todos} setTodos={setTodos} />
    </main>
  );
}

export default App;
