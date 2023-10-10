import { prisma } from "./prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export async function createNote(
  title: string,
  content: string,
  color: string,
) {
  try {
  const session = await getServerSession(authOptions);

    const note = await prisma.note.create({
      data: {
        title,
        content,
        color,
         author: { connect: { email: session?.user?.email! } },
      },
    });

    //console.log(note, "coming from notes.ts")
    return { note };
  } catch (error) {
    console.log(error, "check the methods");
    return { error };
  }
}


export async function deleteNote(noteId: string) {
  // First, check if the note exists
  const note = await prisma.note.findUnique({
    where: {
      id: noteId,
    },
  });

  // If the note doesn't exist, throw an error or handle this case as needed
  if (!note) {
    throw new Error('Note not found');

  }
// If the note exists, proceed with the deletion
const deletedNote = await prisma.note.delete({

  where: {
    id: noteId,
    },
  })
return { deletedNote }
}

export async function editNote(
  title: string,
  content: string,
  noteId: string
) {
  try {

    const editedNote = await prisma.note.update({
  where: {
    id: noteId,
    },

      data: {
        title,
        content,
      },
    });

    console.log(editedNote, "coming from notes.ts")
    return { editedNote };
  } catch (error) {
    console.log(error, "check the methods");
    return { error };
  }
}
