import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import TaskInterface from './types/Task';

@Injectable()
export class TaskService {
    constructor( 
        @InjectRepository(Task) private TaskRepository: Repository<Task>,
    ){}

    findAll(): Promise<TaskInterface[]>{
        return this.TaskRepository.find();
    }

    findOne(id: number): Promise<TaskInterface>{
        return this.TaskRepository.findOneBy({ id });
    }

    create(task: Omit<TaskInterface, 'id'>): Promise<TaskInterface>{
        const data = this.TaskRepository.create(task);
        return this.TaskRepository.save(data);
    }

    async delete(id: number): Promise<TaskInterface[]>{
        await this.TaskRepository.delete(id);
        return this.TaskRepository.find();
    }
}
