"use client";

import { useRef, useState } from "react";
import { createTodoAction } from "../_actions";

// import { useRef } from "react";

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

// export default NewTodo;

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
      <form ref={todoFormRef} action={noteAction}>
        <input name="content" id="" placeholder="Content.." />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default NewTodoForm;
