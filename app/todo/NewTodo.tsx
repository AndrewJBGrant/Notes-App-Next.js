'use client'
import { useRef } from "react";


// Defing a function type onAddTodo
const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {
//                                         ^?
const todoTextInputRef = useRef<HTMLInputElement>(null);
//                         ^?


const submitHandler = (e: React.FormEvent) => {
  e.preventDefault();

  const enteredText = todoTextInputRef.current!.value;
  //       ^?

if ( enteredText.trim().length === 0) {
  //an error maybe??
  return;
}


// A function that will be stored in layout.tsx
props.onAddTodo(enteredText);
};

return(
  <form className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg" onSubmit={submitHandler}>
<label htmlFor="text">Todo Text</label>
<input type="text" id="text" ref={todoTextInputRef}/>
<button className="border-2 border-rose-600">Add Todo</button>


  </form>
);
};


export default NewTodo;
