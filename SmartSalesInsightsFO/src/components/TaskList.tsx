
import TaskItems from "./TaskItems";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { deleteTask, getTask, updateTask } from "../redux/TaskSlice";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const toggleTask = (id: number) => {
    const task =tasks.find((task) => task.id === id );
    if (task) {
      dispatch(updateTask({...task, completed: !task.completed}));
    }
  }

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch])

  return (
    <div>
      {tasks.map((task) => (
        <TaskItems
          key={task.id}
          task={task}
          toggletask={() => toggleTask(task.id)}
          deletetask={() => dispatch(deleteTask(task.id))}
        />
      ))}
    </div>
  );
};

export default TaskList;
