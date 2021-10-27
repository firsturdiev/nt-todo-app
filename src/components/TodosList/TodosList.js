import TodoItem from "../TodoItem/TodoItem";
import "./TodosList.css";

const TodosList = ({ todos, setTodos }) => {
  return (
    <ul className="todos-list">
      {
        todos.map((todo) => <TodoItem todos={todos} setTodos={setTodos} {...todo} key={todo.uniqueId} />)
      }
    </ul>
  );
};

export default TodosList;