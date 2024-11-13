import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'loaclhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'task',
      entities: ['dist/**/*.entity{.js,.ts}'],
      synchronize: true,
    })
  ],
})
export class AppModule {}
