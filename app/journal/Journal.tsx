import DeleteJournal from "./DeleteJournal";
import EditJournalForm from "./EditJournal";
import Link from "next/link";

export type JournalProps = {
id: string;
title: string;
  author?: {
    name: string | null;
  } | null;
  content: string;
  createdAt: Date;
}

const Journal: React.FC<{ journal: JournalProps }> = ({ journal }) => {

 let dateString = journal.createdAt.toLocaleDateString()

return(

<article className=" flex flex-col shadow my-4 p-3">

{/* <h1 className="text-slate-700 text-2xl font-bold pb-4">{journal.title}</h1> */}

   <Link href={`/journal/${journal.id}`} key={journal.id}>
            <h3 className='font-medium'>{journal.id}</h3>
          </Link>

<EditJournalForm journalId={journal.id} initialContent={journal.content} initialTitle={journal.title} />

 <div className="pt-8 text-base font-semibold leading-7 flex flex-row justify-normal items-center">
<DeleteJournal  journalId={journal.id} />
<h3 className="text-slate-600">{dateString}</h3>
</div>
</article>
)
}

export default Journal;
