import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  let [todo, setTodo] = useState([{task:"Sample todo", id:uuidv4()}]);

  let [newTask, setNewTask] = useState("");

  let addTask = () => {
    setTodo([...todo, {task:newTask, id:uuidv4()}]);
    setNewTask("");
  };

  let addTodo = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <>
      <div className="rounded-lg border-2 bg-cyan-600 p-8">
        <h1>TODO LIST</h1>
        <input
          className="mt-6"
          placeholder="Add a new task"
          value={newTask}
          onChange={addTodo}
        />
<br />
        <button className="m-4" onClick={addTask}>
          Add Task
        </button>

        <hr />
        <h2 className="text-3xl">TASK TO DO</h2>
        <ul>
          {todo.map((todo) => {
            return <li key={todo.id}>{todo.task}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
export default Todo;