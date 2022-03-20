import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { todo } from './todo.model';

@Module({
  imports: [SequelizeModule.forFeature([todo])],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
