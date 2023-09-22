export const dynamic = 'force-dynamic';




interface Journal {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

export default async function JournalPage({ params }: Props) {

const journalEntries: Journal[] = await fetch('http://localhost:3000/api/content').then(
  (res) => res.json()
);

const journalEntry = journalEntries.find((journalEntry) => journalEntry.slug === params.slug)!;


  return <div>
    <h2>{journalEntry.slug}</h2>
    <h1>{journalEntry.title}</h1>
    <h4>{journalEntry.content}</h4>
  </div>;
}
