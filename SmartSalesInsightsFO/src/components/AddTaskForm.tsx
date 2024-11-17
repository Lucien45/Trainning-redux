import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../redux/TaskSlice";
import { AppDispatch } from "../redux/store";

const AddTaskForm: React.FC = () => {

  const [newTaskList, setNewTaskList] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const AddNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskList.trim()) {
      dispatch(
        createTask({
          title: newTaskList,
          completed: false,
        })
      );
      setNewTaskList("");
    }
  };
    
  return (
    <div className="add-task-form">
      <form onSubmit={AddNewTask}>
        <input 
          type="text" value={newTaskList} 
          onChange={(e) => setNewTaskList(e.target.value)} 
          placeholder="Titre task" required
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default AddTaskForm