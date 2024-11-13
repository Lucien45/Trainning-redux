import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import TaskInterface from './types/Task';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){}

    @Get()
    findAll(): Promise<TaskInterface[]>{
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<TaskInterface>{
        return this.taskService.findOne(+id);
    }

    @Post()
    create(@Body() task: Omit<TaskInterface, 'id'>): Promise<TaskInterface>{
        return this.taskService.create(task);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<TaskInterface[]>{
        return this.taskService.delete(+id);
    }

}
