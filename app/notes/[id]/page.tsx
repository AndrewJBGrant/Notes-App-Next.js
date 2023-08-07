import styles from "../Notes.module.css";

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotesPage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>Note//{note.Title}</h1>

      <div className={styles.note}>
        <h3>{note.Content}</h3>

        <p className="text-sm text-green-600 truncate">{note.created}</p>
      </div>

    </div>
  );
}
