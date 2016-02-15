class Router {

  static home() {
    return Router.todoList();
  }

  static todoList() {
    let TodoListScene = require('./scenes/TodoListScene');
    return {
      component: TodoListScene,
    };
  }

  static newTodoForm() {
    let NewTodoFormScene = require('./scenes/NewTodoFormScene');
    return {
      component: NewTodoFormScene,
    };
  }

}

module.exports = Router;
