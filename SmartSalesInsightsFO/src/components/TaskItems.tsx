import Task from "../types/Task";

interface TaskItemProps {
  task: Task;
  toggletask: (id: number) => void;
  deletetask: (id: number) => void;
}
const TaskItems: React.FC<TaskItemProps> = ({ task, toggletask, deletetask }) => {

  return (
    <>
      <div className="task-item">
        <input
          type="checkbox"
          checked={task.completed}
          onClick={() => toggletask(task.id)} />
        <span className={task.completed ? "completed" : ""}>
          {task.title}
        </span>
        <button onClick={() => deletetask(task.id)}>Delete</button>
      </div>
    </>
  );
};

export default TaskItems;
