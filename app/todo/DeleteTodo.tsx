
import { deleteTodoAction } from "../_actions";


// import { NoteProps } from "./Note";



interface TodoDeleteProps {
  todoId: string;
};

const DeleteTodo: React.FC<TodoDeleteProps> = ({todoId}) => {

  async function handleDeleteTodo ()  {
 await deleteTodoAction(todoId)
 console.log(todoId, "Coming from the delete todo page")
  }

return(
  <>
  <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" onClick={handleDeleteTodo}>
  Delete
</button>
</>
);

};

export default DeleteTodo;
