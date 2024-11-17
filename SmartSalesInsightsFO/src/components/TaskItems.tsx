import Task from "../types/Task";

interface TaskItemProps {
  task: Task;
  toggletask: (id: string) => void;
  deletetask: (id: string) => void;
}
const TaskItems: React.FC<TaskItemProps> = ({ task, toggletask, deletetask }) => {

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
    </>
  );
};

export default TaskItems;
