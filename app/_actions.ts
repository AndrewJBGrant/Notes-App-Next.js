"use server"



import { revalidatePath } from "next/cache";
import { createNote, deleteNote } from "./lib/notes"

export async function createnoteAction(title: string, content: string, color: string) {
  await createNote(title, content, color);
  revalidatePath('/app/notes/page')
}

export async function deletenoteAction(noteId: string) {
  await deleteNote(noteId);
  revalidatePath('/app/notes/page')
}
