import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./TaskSlice";

const AddTaskForm: React.FC = () => {

  const [newTaskList, setNewTaskList] = useState("");
  const dispatch = useDispatch();

  const AddNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskList.trim()) {
      dispatch(addTask(newTaskList));
      setNewTaskList("");
    }
  };
    
  return (
    <div>
      <form onSubmit={AddNewTask}>
        <input
        type="text"
        value={newTaskList}
        onChange={(e) => setNewTaskList(e.target.value)}
        placeholder="Titre task"
        required />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default AddTaskForm