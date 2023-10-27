"use client";
import DeleteTodo from "./DeleteTodo";
import { HighlightLinks } from "../HighlightLinks";

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

      <div className="py-4 flex justify-between w-full max-w-sm">
     <HighlightLinks content={todo.content} />
        <DeleteTodo todoId={todo.id} />
      </div>
    </>
  );
};

export default Todo;
