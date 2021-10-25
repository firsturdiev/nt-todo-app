import "./TodoItem.css";

const TodoItem = ({ id, name, completed, todos, setTodos }) => {
  function handleDeleteButtonClick() {
    setTodos(todos.filter(todo => !(todo.id === id)));
  }

  function handleTodoCheck() {
    setTodos(() => (
      todos.map(todo => (todo.id !== id) ? todo : { ...todo, completed: !completed })
    ))
  }

  return (
    <li className={"todo " + (completed ? "todo--done" : "")}>
      <label className="todo__label">
        <input onChange={handleTodoCheck} className="todo__checkbox" type="checkbox" checked={completed} />
        <p className="todo__name">{name}</p>
      </label>

      <button className="todo__action todo__edit">Edit todo</button>
      <button className="todo__action todo__delete" onClick={handleDeleteButtonClick}>Delete todo</button>
    </li>
  );
};

export default TodoItem;