// import { getDate } from "../NavBar";
import { prisma } from "../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import NewTodoForm from "./NewTodo";
import Todo from "./Todos";

import data from "../data.json";

export default async function TodoPage() {
  // const session = await getServerSession(authOptions);
  // // console.log(session?.user?.name, "Hello there User were looking at todos??!");
  // const todoFeed = await prisma.todo.findMany({
  //   where: {
  //     author: { email: session?.user?.email },
  //   },
  //   include: {
  //     author: {
  //       select: { name: true },
  //     },
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  // const currentUser = session?.user?.name;
  // const firstName = currentUser?.split(" ");


  const testTodoFeed = data.todos.map((testFeed) => {
    return (
 <Todo key={data.id} todo={testFeed} />
    )
  });

  return (
    <>
      <div className="grid mx-4">
        <NewTodoForm />
        {/* {todoFeed?.map((todoFeed) => {
          return <Todo key={todoFeed.id} todo={todoFeed} />;
        })} */}
{testTodoFeed}
      </div>
    </>
  );
}
