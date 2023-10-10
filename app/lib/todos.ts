import { prisma } from "./prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export async function createTodo(
  content: string,
) {
  try {
  const session = await getServerSession(authOptions);

    const todo = await prisma.todo.create({
      data: {
        content,
         author: { connect: { email: session?.user?.email! } },
      },
    });

    //console.log(todo, "coming from todos.ts")
    return { todo };
  } catch (error) {
    console.log(error, "check the methods");
    return { error };
  }
}
