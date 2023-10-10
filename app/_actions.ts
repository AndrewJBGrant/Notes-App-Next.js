"use server"



import { revalidatePath } from "next/cache";
import { createNote, deleteNote, editNote } from "./lib/notes"

export async function createnoteAction(title: string, content: string, color: string) {
  await createNote(title, content, color);
  revalidatePath('/app/notes/page')
}

export async function deletenoteAction(noteId: string) {
  await deleteNote(noteId);
  revalidatePath('/app/notes/page')
}


export async function editNoteAction(noteId: string, title: string, content: string, color: string) {
  await editNote(noteId, title, content, color);
}
