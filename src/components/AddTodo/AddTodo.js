import { useRef } from "react";
import "./AddTodo.css";

const AddTodo = ({todos, setTodos}) => {
  const inputRef = useRef();
  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (inputRef.current.value.trim()) {
      setTodos([
        ...todos, 
        {
          id: todos.length,
          name: inputRef.current.value,
          completed: false
        }
      ]);

      inputRef.current.value = null;
    }
    // Name, Description, Tags (<- 1ta input) (umumiy 3ta input)
  };

  return (
    <form onSubmit={handleFormSubmit} className="add-todo" action="#">
      <input ref={inputRef} placeholder="Todo name" className="add-todo__input" type="text" />
      <button className="add-todo__submit" type="submit" >Add todo</button>
    </form>
  );
};

export default AddTodo;