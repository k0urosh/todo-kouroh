import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TodoDto } from './dto/todo.dto';
import { todo } from './todo.model';


@Injectable()
export class TodoService {
    constructor(@InjectModel(todo)
        private todoModel: typeof todo
    ) {}

    async create(todoDto: TodoDto) {
        
        const newTodo = await this.todoModel.create({...todoDto});

        const returnInformation = {
            data: newTodo, 
            message: "Successfully created new todo item: " + newTodo.id
        }
        return returnInformation
    }

    async update(todoId: number,todoDto: TodoDto) {
        const singleTodoItem = await this.findOne(todoId)

        const updatedTodoItem = await singleTodoItem.update(todoDto)

        const returnInformation = {
            data: updatedTodoItem, 
            message: "Successfully updated todo item: " + todoId
        }
        return returnInformation
    }

    async markTodoAsCompleted(todoId: number) {
        const singleTodoItem = await this.findOne(todoId)

        const todoUpdatedInformation: TodoDto = {
            "status": true
        }
        const updatedTodoItem = await singleTodoItem.update(todoUpdatedInformation)

        const returnInformation = {
            data: updatedTodoItem, 
            message: "Successfully marked todo item: " + todoId + " as complete"
        }

        return returnInformation
    }

    async getTodoList(){
        const todoList:TodoDto[] = await this.findAll() 
        .catch(error => { throw error})


        const returnInformation = {
            data: todoList, 
            message: "Successfully retrieved todo list"
        }
        
        return returnInformation
    }

    async findAll(): Promise<TodoDto[]> {
        const todoList:todo[] = await this.todoModel.findAll({
            where:{
                is_delete: false
            }
        })
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

    async delete(todoId: number){
        const singleTodoItem = await this.findOne(todoId)

        const todoUpdatedInformation: TodoDto = {
            "is_delete": true
        }

        await singleTodoItem.update(todoUpdatedInformation)

        const returnInformation = {
            data: singleTodoItem, 
            message: "Successfully set todo: " + singleTodoItem.id + " as deleted"
        }

        return returnInformation
    }

    async fullDelete(todoId: number){
        const singleTodoItem = await this.findOne(todoId)

        await singleTodoItem.destroy()

        const returnInformation = {
            data: singleTodoItem, 
            message: "Successfully deleted todo: " + todoId
        }

        return returnInformation
    }
}
