import { useState } from "react";
import Task from "../types/Task";
import TaskItems from "./TaskItems";

interface TaskListProps {
  tasks: Task[];
  toggletask: (id: number) => void;
  deletetask: (id: number) => void;
  // addtask: (title: string) => void;
}
const TaskList: React.FC<TaskListProps> = ({ tasks, toggletask, deletetask }) => {
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
        {tasks.map((task) => (
          <TaskItems
            task={task}
            toggletask={toggletask}
            deletetask={deletetask} />
        ))}
      </div>
      {/* <div>
        <h3>Add a new task</h3>
        <form onSubmit={AddNewTask}>
          <input
            type="text"
            value={newTaskList}
            onChange={(e) => setNewTaskList(e.target.value)}
            placeholder="Titre tsk"
            required />
          <button type="submit">Add</button>
        </form>
      </div> */}
    </>
  );
};

export default TaskList;
