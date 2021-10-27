import { useRef, useState } from "react";
import "./AddTodo.css";

const AddTodo = ({ todos, setTodos }) => {
  const inputRef = useRef();
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState('Add todo');

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (inputRef.current.value.trim()) {
      setDisabled(true);
      setLoading('Adding...')

      fetch('https://jsonplaceholder.typicode.com/todos/', {
        method: 'POST',
        body: JSON.stringify({
          uniqueId: Math.floor(Math.random() * 100),
          name: inputRef.current.value,
          completed: false
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(newTodo => {
          setTodos(todos => ([
            newTodo,
            ...todos
          ])
          )
        })
        .then(() => {
          setLoading('Add todo');
          setDisabled(false);
        })
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className="add-todo" action="#">
      <input ref={inputRef} placeholder="Todo name" className="add-todo__input" type="text" />
      <button disabled={disabled} className="add-todo__submit" type="submit">{loading}</button>
    </form>
  );
}

export default AddTodo;