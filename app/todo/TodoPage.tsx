
import { getDate } from "../NavBar";
import { prisma } from "../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import NewTodoForm from "./NewTodo";
import Todo from "./Todos";


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
    <p>Todos are here...</p>
    {todoFeed?.map((todoFeed) => {
      return <Todo key={todoFeed.id} todo={todoFeed} />;
    })}


    <p>make a new todo</p>
    <NewTodoForm />

    </>
  );
}
