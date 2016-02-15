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

}

module.exports = Router;
