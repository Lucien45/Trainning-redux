import "./App.css";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import { Provider } from "react-redux";
import store from "./store";
import { useEffect, useState } from "react";
import Task from "./types/Task";
import { getTask, updateTask, deleteTask as deleteTaskService, createTask } from "./services/Task.service";

function App() {

  const [taskList, setTaskList] = useState<Task[]>([]);

  const fetchTask = async () => {
    const tasks = await getTask();
    setTaskList(tasks);
  }

  const toggleTask = (id: number) => {
    const task = taskList.find((task) => task.id === id);

    task && updateTask(id, {...task, completed: !task.completed});
    setTaskList(taskList.map(task => task.id === id ? {id: task.id, title: task.title, completed: !task.completed}: task));
  }

  const Deletetask = (id: number) => {
    deleteTaskService(id).then(res => setTaskList(res))
  }

  const addTask = (title: string) => {
    createTask({title, completed: false}).then(res => setTaskList([...taskList, res]))
  }

  useEffect(() => {
    fetchTask();
  }, [])

  return (
    <>
      <Provider store={store}>
        <h1>Task Manager</h1>
        <AddTaskForm />
        <TaskList />
      </Provider>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
