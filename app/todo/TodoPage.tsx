
// import Todos from "./Todos";
// import createTodo, { Todo } from "../models/todo";
// import NewTodo from "./NewTodo";

// import { useState } from "react";

// const FinalTodo = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const addTodoHandler = (todoText: string) => {
//     const newTodo = createTodo(todoText);

//     setTodos((prevTodos) => {
// return prevTodos.concat(newTodo)
//     });
//   };

//   const deleteTodoHandler = (todoId: string) => {
//     setTodos((prevTodos) => {
//       return prevTodos.filter(todo => todo.id !== todoId);
//     })
//   };

//   return (
//     <div className="flex flex-col justify-center p-8">
//       <h1>Keep track of your todos here</h1>
//       <NewTodo onAddTodo={addTodoHandler} />
//      <div className="border-solidd border-2 border-green-400 "><Todos items={todos} onDeleteTodo={deleteTodoHandler} /> </div>
//     </div>
//   );
// };

// export default FinalTodo;
import { getDate } from "../NavBar";
import { prisma } from "../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import NewTodoForm from "./NewTodo";

export default async function TodoPage() {
  const session = await getServerSession(authOptions);
  console.log(session?.user?.name, "Hello there User were looking at todos??!");
  const todoFeed = await prisma.todo.findMany({
    where: {
      author: { email: session?.user?.email },
    },
    include: {
      author: {
        select: { name: true },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  //console.log(noteFeed)

  // type Props = {
  //   noteFeed: NoteProps[];
  // };

  const currentUser = session?.user?.name;
  const firstName = currentUser?.split(" ");

  const ourDate = new Date();


  // getDate() {
  //     const today = new Date();
  //     const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  // const day = today.getDay();
  // // console.log(day)
  // const currentDay = dayNames[day];
  // };


  return (
    <>
    <NewTodoForm />
    <p>Todos for today.. </p>
      <div className="row-span-3 grid gap-2 grid-cols-3">
        {todoFeed?.map((todoFeed) => {
          return (
            <div className="todo">
              <p>{todoFeed.content}</p>
            </div>
          );
        })}
      </div>
 
    </>
  );
}
