import DeleteButton from "../buttons/DeleteButton";
import { deleteTodoAction } from "../_actions";



interface TodoDeleteProps {
  todoId: string | number;
}

const DeleteTodo: React.FC<TodoDeleteProps> = ({ todoId }) => {
  async function handleDeleteTodo() {
    // await deleteTodoAction(todoId);
    // console.log(todoId, "Coming from the delete todo page");
  }

  return (
    <>
      <DeleteButton onClick={handleDeleteTodo} />
    </>
  );
};

export default DeleteTodo;
