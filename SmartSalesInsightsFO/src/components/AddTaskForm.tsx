import { useState } from "react";

interface AddTask {
    addtask: (title: string) => void;
}

const AddTaskForm: React.FC<AddTask> = ({addtask}) => {

  const [newTaskList, setNewTaskList] = useState("");

  const AddNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskList.trim()) {
      addtask(newTaskList);
      setNewTaskList(""); 
    }
  };
    
  return (
    <div>
        <h3>Add a new task</h3>
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