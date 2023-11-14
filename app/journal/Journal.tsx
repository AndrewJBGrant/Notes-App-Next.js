"use client";
import DeleteJournal from "./DeleteJournal";
import EditJournalForm from "./EditJournal";

export type JournalProps = {
id: string;
title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  createdAt: Date;
}

const Journal: React.FC<{ journal: JournalProps }> = ({ journal }) => {

 let dateString = journal.createdAt.toLocaleDateString()

return(
  <>
<article className="w-full flex flex-col shadow my-4 p-3">

<h3 className="text-slate-600 text-2xl font-bold pb-4">{dateString}</h3>
<h1 className="text-slate-700 text-2xl font-bold pb-4">{journal.title}</h1>

<EditJournalForm journalId={journal.id} initialContent={journal.content} />

{/* <p contentEditable={true} suppressContentEditableWarning={true} className="text-base/57">{journal.content}</p> */}

 <div className="pt-8 text-base font-semibold leading-7 place-self-end  flex flex-row justify-normal items-center">
<DeleteJournal  journalId={journal.id}/>
</div>
</article>
  </>
)
}

export default Journal;
