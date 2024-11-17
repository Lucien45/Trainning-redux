import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Task from "../types/Task";
import axios from "axios";

const API_URL = 'http://localhost:3000/task';

export const getTask = createAsyncThunk('tasks/getTask', async (): Promise<Task[]> => {
    const result = await axios.get(API_URL);
    return result.data;
})

export const getTaskById = createAsyncThunk('tasks/getTaskById', async(id: number): Promise<Task> => {
    const result = await axios.get(`${API_URL}\\${id}`);
    return result.data;
})

export const createTask = createAsyncThunk('tasks/createTask', async (task: Omit<Task, 'id'>): Promise<Task> => {
    const result = await axios.post(API_URL, task);
    return result.data;
})

export const updateTask = createAsyncThunk('task/udateTask', async (task: Partial<Task>): Promise<Task> => {
    const result = await axios.put(`${API_URL}\\${task.id}`, task);
    return result.data;
})

export const deleteTask = createAsyncThunk('tasks/deleteTask', async(id: number): Promise<number> => {
    await axios.delete(`${API_URL}\\${id}`);
    return id;
})


const TaskSlice = createSlice({
    name: 'tasks',
    initialState: [] as Task[],
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(getTask.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                const index = state.findIndex(task => task.id === action.payload.id);
                if (index !== -1) {
                    state[index] = {...state[index], ...action.payload};
                }
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                return state.filter(task => task.id !== action.payload);
            })
            .addCase(deleteTask.rejected, (state, action) => {
                console.error('Failed to delete task:', action.error.message);
            });
            
    }
});

// export const { addTask, updateTask, toggleTask, deleteTask } = TaskSlice.actions;

export default TaskSlice.reducer;
