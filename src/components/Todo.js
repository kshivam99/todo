import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { CgPlayListAdd } from "react-icons/cg";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  //input todo
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTodos = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="container">
      <h1>
        Todo App
        <span role="img">✅</span>
      </h1>
      <form>
        <TextField
          label="Add a task..."
          type="text"
          variant="outlined"
          value={input}
          onChange={handleChange}
        />
        <span className="space"></span>
        <Button
          onClick={addTodos}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={!input}
        >
          <CgPlayListAdd className="add-btn" /> Add
        </Button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <p> {todo}</p>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
