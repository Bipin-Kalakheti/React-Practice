import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {}

  function deleteTask(index) {}

  function moveTaskUp(index) {}
  function moveTaskDown(index) {}

  return (
    <>
      <div className="to-do-list">
        <h1>To Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a Task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>Add Task</button>
        </div>

        <ol>
            {tasks.map((element, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>🗑️</button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>⬆️</button>
                    <button className="move-button" onClick={() => moveTaskDown(index)}>⬇️</button>


                </li>
            )}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
