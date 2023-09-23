import { prisma } from "./prisma";

export async function createNote(title: string, content: string) {
  try {
    const note = await prisma.note.create({data: {title, content}})
    return {note}
  } catch (error) {
    console.log(error, "check the methods")
    return {error}

  }
}
