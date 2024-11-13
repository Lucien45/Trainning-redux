
import TaskItems from "./TaskItems";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { deleteTask, toggleTask } from "./TaskSlice";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  return (
    <div>
      {tasks.map((task) => (
        <TaskItems
          key={task.id}
          task={task}
          toggletask={() => dispatch(toggleTask(task.id))}
          deletetask={() => dispatch(deleteTask(task.id))}
        />
      ))}
    </div>
  );
};

export default TaskList;
