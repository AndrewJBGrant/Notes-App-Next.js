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


export async function deleteTodo(todoId: string) {
  // First, check if the note exists
  const todo = await prisma.todo.findUnique({
    where: {
      id: todoId,
    },
  });

  // If the note doesn't exist, throw an error or handle this case as needed
  if (!todo) {
    throw new Error('Todo not found');

  }
// If the note exists, proceed with the deletion
const deletedTodo = await prisma.todo.delete({

  where: {
    id: todoId,
    },
  })
return { deletedTodo }
}
