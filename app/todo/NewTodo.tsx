"use client";

import { useRef } from "react";
import { createTodoAction } from "../_actions";

const NewTodoForm = () => {
  const todoFormRef = useRef<HTMLFormElement>(null);
  async function noteAction(data: FormData) {
    const content = data.get("content");

    if (!content || typeof content !== "string") return;

    await createTodoAction(content);

    console.log(content, "coming from createTodo.tsx");
    todoFormRef.current?.reset();
  }

  return (
    <>
      <form className="w-full max-w-sm" ref={todoFormRef} action={noteAction}>
        <div className="flex items-center border- border-teal-500">
          <input
            placeholder="Add Todo.."
            name="content"
            className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 leading-tight focus:outline-none"
          />
          <button
            data-testId="newTodoButton"
            type="submit"
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            ADD
          </button>
        </div>
      </form>
    </>
  );
};

export default NewTodoForm;
