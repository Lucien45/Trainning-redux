import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    completed: boolean;
}