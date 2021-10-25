import TodoItem from "../TodoItem/TodoItem";
import "./TodosList.css";

const TodosList = ({ todos, setTodos }) => {
  // localStorage.setItem('todos', JSON.stringify(todos));
  
  return (
    <ul className="todos-list">
      {
        todos.map((todo) => <TodoItem todos={todos} setTodos={setTodos} {...todo} key={todo.id} />)
      }
    </ul>
  );
};

export default TodosList;