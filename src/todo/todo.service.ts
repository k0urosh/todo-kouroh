import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TodoDto } from './dto/todo.dto';
import { todo } from './todo.model';


@Injectable()
export class TodoService {
    constructor(@InjectModel(todo)
        private todoModel: typeof todo
    ) {}

    async create(todoDto: TodoDto): Promise<TodoDto> {
        return await this.todoModel.create({...todoDto});
    }

    async update(todoId: number,todoDto: TodoDto): Promise<TodoDto> {
        const singleTodoItem = await this.findOne(todoId)

        const updatedTodoItem = await singleTodoItem.update(todoDto)

        return updatedTodoItem
    }

    async markTodoAsCompleted(todoId: number): Promise<TodoDto> {
        const singleTodoItem = await this.findOne(todoId)

        const todoUpdatedInformation: TodoDto = {
            "status": true
        }
        const updatedTodoItem = await singleTodoItem.update(todoUpdatedInformation)

        return updatedTodoItem
    }

    async getTodoList(){
        const todoList:todo[] = await this.findAll() 
        .catch(error => { throw error})

        return todoList
    }

    async findAll(): Promise<todo[]> {
        const todoList:todo[] = await this.todoModel.findAll()
        .catch(error => { throw error})

        return todoList
    }

    async findOne(todoId: number): Promise<todo> {
        const singleTodoItem =  await this.todoModel.findOne({
            where: {
              id: todoId,
            },
          }) 
          .catch(error => { throw error})
      
          return singleTodoItem
    }

    async delete(todoId: number): Promise<TodoDto> {
        const singleTodoItem = await this.findOne(todoId)

        const deletedTodoItem = await singleTodoItem.destroy()

        return singleTodoItem
    }
}
