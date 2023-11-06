import DeleteButton from "../buttons/DeleteButton";
import { deleteTodoAction } from "../_actions";

// import { NoteProps } from "./Note";

interface TodoDeleteProps {
  todoId: string;
}

const DeleteTodo: React.FC<TodoDeleteProps> = ({ todoId }) => {
  async function handleDeleteTodo() {
    await deleteTodoAction(todoId);
    console.log(todoId, "Coming from the delete todo page");
  }

  return (
    <>
      <DeleteButton onClick={handleDeleteTodo} />
    </>
  );
};

export default DeleteTodo;
