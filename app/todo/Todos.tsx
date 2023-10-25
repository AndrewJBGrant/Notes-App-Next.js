"use client";
import DeleteTodo from "./DeleteTodo";

export type TodoProps = {
  id: string;
  content: string;
  author: {
    name: string;
    email: string;
  } | null;
};

const Todo: React.FC<{ todo: TodoProps }> = ({ todo }) => {
  return (
    <>
      <div className="py-4 flex justify-between w-full max-w-sm border-l-4 border-indigo-500 ">
        <p className="text-lg">{todo.content}</p>
        <DeleteTodo todoId={todo.id} />
      </div>
    </>
  );
};

export default Todo;
