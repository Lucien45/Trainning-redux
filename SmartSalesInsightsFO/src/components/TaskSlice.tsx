import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
import Task from "../types/Task";


const TaskSlice = createSlice({
    name: 'tasks',
    initialState: [] as Task[],
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: uuid(),
                title: action.payload,
                completed: false,
            });
        },
        updateTask: (state, action) => {
            const { id, title } = action.payload;
            const task = state.find((task) => task.id === id);
            if(task) task.title = title;
        },
        toggleTask: (state, action) => {
            const task = state.find((task) => task.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        },
    },
});

export const { addTask, updateTask, toggleTask, deleteTask } = TaskSlice.actions;

export default TaskSlice.reducer;
