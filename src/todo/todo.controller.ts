import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
     public async createTodo(@Body() todoDto: TodoDto){
     const result = await this.todoService.create(todoDto)
     
     if (!result) {
       throw new HttpException('Not created succesfully, result is empty', HttpStatus.BAD_REQUEST);
     }
 
     return result;
   }

    @UseGuards(JwtAuthGuard)
    @Put('update/:id')
     public async updateTodo(@Param('id') todoId: number, @Body() todoDto: TodoDto){
     const result = await this.todoService.update(todoId, todoDto)
     
     if (!result) {
       throw new HttpException('Not updated succesfully, result is empty', HttpStatus.BAD_REQUEST);
     }
 
     return result;
   }

   @UseGuards(JwtAuthGuard)
   @Put('completed/:id')
    public async markTodoAsCompleted(@Param('id') todoId: number){
    const result = await this.todoService.markTodoAsCompleted(todoId)
    
    if (!result) {
      throw new HttpException('Not marked as complete succesfully, result is empty', HttpStatus.BAD_REQUEST);
    }

    return result;
   }
    
    @UseGuards(JwtAuthGuard)
    @Get('list')
    public async getAllTodo() {
        return this.todoService.getTodoList();
    }

    @UseGuards(JwtAuthGuard)
    @Get('list/:id')
    public async getSpecificTodo(@Param('id') todoId: number) {
        return this.todoService.findOne(todoId);
    }

    @UseGuards(JwtAuthGuard)
    @Put('delete/:id')
    public async delete(@Param('id') todoId: number) {
      const result = await this.todoService.delete(todoId)
     
      if (!result) {
        throw new HttpException('Not deleted succesfully, result is empty', HttpStatus.BAD_REQUEST);
      }
  
      return result;    
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/permanent/:id')
    public async fullDelete(@Param('id') todoId: number) {
      const result = await this.todoService.fullDelete(todoId)
     
      if (!result) {
        throw new HttpException('Not deleted succesfully, result is empty', HttpStatus.BAD_REQUEST);
      }
  
      return result;    
    }
  }

