"use client";

import { useRef, useState } from "react";
import { createTodoAction } from "../_actions";

// // Defing a function type onAddTodo
// const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
//   //                                         ^?
//   const todoTextInputRef = useRef<HTMLInputElement>(null);
//   //                         ^?

//   const submitHandler = (e: React.FormEvent) => {
//     e.preventDefault();

//     const enteredText = todoTextInputRef.current!.value;
//     //       ^?

//     // A function that will be stored in layout.tsx
//     props.onAddTodo(enteredText);

//     if (todoTextInputRef.current) {
//       todoTextInputRef.current.value = "";
//     }

//     if (enteredText.trim().length === 0) {
//       //an error maybe??
//       return;
//     }
//   };

//   return (
//     <form className="w-96" onSubmit={submitHandler}>
//       <label htmlFor="text">Todo Text</label>
//       <input type="text" id="text" ref={todoTextInputRef} />
//       <button className="border-2 border-rose-600">Add Todo</button>
//     </form>
//   );
// };

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


<form className="w-full max-w-sm" ref={todoFormRef} action={noteAction} >
  <div className="flex items-center border-b border-teal-500 py-2">
    <input placeholder="Add Todo.." name="content" className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 leading-tight focus:outline-none" />
    <button type="submit" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
      ADD
    </button>

 </div>
</form>
    </>
  );
};

export default NewTodoForm;
