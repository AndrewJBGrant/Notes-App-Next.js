import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";



const Todos: React.FC<{ items: Todo[]; onDeleteTodo: (id: string) => void }> = (
  props
) => {

    if (props.items.length === 0) {
    return <h2>No Todos for today</h2>;
  }
  //          ^?
  return (
    <ul className="w-96 bg-white rounded-xl shadow-lg grid grid-cols-1 divide-y">
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={props.onDeleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
