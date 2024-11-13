import { useState } from "react";
import Task from "../types/Task";

interface TaskItemProps {
  task: Task;
  toggletask: (id: number) => void;
  deletetask: (id: number) => void;
  // addtask: (title: string) => void;
}
const TaskItems: React.FC<TaskItemProps> = ({ task, toggletask, deletetask }) => {
  // const [newTaskList, setNewTaskList] = useState("");

  // const AddNewTask = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (newTaskList.trim()) {
  //     addtask(newTaskList);
  //     setNewTaskList(""); 
  //   }
  // };
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onClick={() => toggletask(task.id)} />
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.title}
        </span>
        <button onClick={() => deletetask(task.id)}>Delete</button>
      </div>
      {/* <div>
        <h3>Add a new task</h3>
        <form onSubmit={AddNewTask}>
          <input
            type="text"
            value={newTaskList}
            onChange={(e) => setNewTaskList(e.target.value)}
            placeholder="Titre tsk"
            required
          />
          <button type="submit">Add</button>
        </form>
      </div> */}
    </>
  );
};

export default TaskItems;
