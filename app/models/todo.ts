// class Todo {
//   id: string;
//   text: string;

// constructor(todoText: string) {
//   this.text = todoText;
//   this.id = new Date().toISOString();

// }
// }

// export default Todo


export interface Todo {
  id: string;
  text: string;
}

function createTodo(todoText: string): Todo {
  return {
    text: todoText,
    id: new Date().toISOString(),
  };
}

export default createTodo;
