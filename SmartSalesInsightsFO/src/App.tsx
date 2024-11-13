import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskList from "./components/TaskList";
import Task from "./types/Task";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [count, setCount] = useState(0);

  const [tasksList, setTaskList] = useState<Task[]>([
    {id:0, title:'task 1', completed: false},
    {id:1, title:'task 2', completed: true},
    {id:2, title:'task 3', completed: false},
  ])

  const toggletask = (id: number) => {
    setTaskList(tasksList.map(task => task.id === id ? {id: task.id, title: task.title, completed: !task.completed}: task))
  }

  const deletetask = (id: number) => {
    setTaskList(tasksList.filter(task => task.id === id ? null : task))
  }

  const addtask = (title: string) => {
    const newTask: Task = {
      id: tasksList.length,
      title,
      completed: false,
    };
    setTaskList([...tasksList, newTask]);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <AddTaskForm addtask={addtask}/>
      <TaskList tasks={tasksList} toggletask={(id) => toggletask(id)} deletetask={(id) => deletetask(id)} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
