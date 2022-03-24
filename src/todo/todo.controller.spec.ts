import { TodoDto } from './dto/todo.dto';
import { TodoController } from './todo.controller';
import { todo } from './todo.model';
import { TodoService } from './todo.service';

describe('TodoController', () => {
  let todoController: TodoController;
  let todoService: TodoService;
  let todoModel: typeof todo;

  beforeEach(() => {
    todoService = new TodoService(todoModel);
    todoController = new TodoController(todoService);
  });

  describe('findAll', () => {
    it('should return an array of todo items', async () => {
      const result: TodoDto[] = [{
        "description": "My first todo Item",
        "status": false
      }];
      jest.spyOn(todoService, 'findAll').mockImplementation(() => new Promise((resolve, reject) => resolve(result)));

      expect(await todoController.getAllTodo()).toBe(result);
    });
  });
});
