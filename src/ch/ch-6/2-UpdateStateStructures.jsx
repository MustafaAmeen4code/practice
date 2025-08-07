import React, { useState } from "react";

const UpdateStateStructures = () => {
  const [user, setUser] = useState({ name: "John", age: 30 });
  const [toDo, setTodo] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Build a project", completed: false },
  ]);

  const updateName = () => {
    setUser((prev) => ({ ...prev, name: "Jane" }));
  };

  const increaseAge = () => {
    setUser((prev) => ({ ...prev, age: prev.age + 1 }));
  };
  const addTodo = () => {
    setTodo((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        task: `Task ${prev.length + 1}`,
        completed: false,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <React.Fragment>
      <div>
        <h3>User Information</h3>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <button onClick={updateName}>Update Name</button>
        <button onClick={increaseAge}>Increase Age</button>
      </div>
      <div>
        <h3>Todo List</h3>
        <ul>
          {toDo.map((todo) => (
            <li key={todo.id}>
              {todo.task}
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </React.Fragment>
  );
};

export default UpdateStateStructures;
