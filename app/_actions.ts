"use server"

import { revalidatePath } from "next/cache";
import { createNote, deleteNote, editNote } from "./lib/notes"
import { createTodo, deleteTodo } from "./lib/todos";
import { createJournal, deleteJournal, editJournal } from "./lib/journals";
// Note Actions
export async function createnoteAction(title: string, content: string, color: string) {
  await createNote(title, content, color);
  revalidatePath('/app/notes/page')
}

export async function deletenoteAction(noteId: string) {
  await deleteNote(noteId);
  revalidatePath('/app/notes/page')
}

export async function editNoteAction(noteId: string, title: string, content: string) {
  await editNote(noteId, title, content);
  revalidatePath('/app/notes/page')
}

// Todo Actions
export async function createTodoAction(content:string) {
await createTodo(content);
revalidatePath('/app/todo/TodoPage')
}

export async function deleteTodoAction(todoId: string) {
  await deleteTodo(todoId);
  revalidatePath('/app/notes/page')
}


// Journal Actions
export async function createJournalAction(title: string, content: string) {
  await createJournal(title, content);
  revalidatePath('/app/journal/page')
}

export async function deleteJournalAction(journalId: string) {
  await deleteJournal(journalId);
  revalidatePath('/app/journal/page')
}

export async function editedJournalAction(content: string, journalId: string) {
await editJournal(content, journalId);
revalidatePath('/app/journal/page')
}
