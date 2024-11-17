import "./App.css";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import { Provider } from "react-redux";
import store from "./store";

function App() {

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
