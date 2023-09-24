import { prisma } from "./prisma";

export async function createNote(title: string, content: string, color: string) {
  try {
    const note = await prisma.note.create({data: {title, content, color}})
    return {note}
  } catch (error) {
    console.log(error, "check the methods")
    return {error}

  }
}
