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
    <ul className="">
      {props.items.map((item) => (
       <li className="border-dotted border-2 border-indigo-600 "><TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={props.onDeleteTodo.bind(null, item.id)}
        /></li>
      ))}
    </ul>
  );
};

export default Todos;
