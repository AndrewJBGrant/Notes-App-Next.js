"use client";
import DeleteJournal from "./DeleteJournal";

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


return (
  <>
<article className="w-full flex flex-col shadow my-4">

<h3 className="text-blue-700 text-sm font-bold uppercase pb-4">{dateString}</h3>
<h1>{journal.title}</h1>
<p className="">{journal.content}</p>

<DeleteJournal  journalId={journal.id}/>
</article>
  </>
)
}

export default Journal;
