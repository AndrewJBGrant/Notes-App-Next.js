import { prisma } from "../../lib/prisma";
import Link from 'next/link'
import { JournalProps } from "../Journal";
import EditJournalForm from "../EditJournal";


interface Props {
  params: {
    id: string;
  };
}


export default async function JournalIdPage({ params }: Props) {


const journalPost = await prisma.journal.findUnique({
    where: {
    id: params.id
    },

  });
    const { title, content, createdAt, id } = journalPost ?? {};


 let dateString = journalPost?.createdAt.toLocaleDateString()
  // console.log(typeof(journalPost?.id))
return (
<>
 <Link href='/journal'>Go Back</Link>
  <h2 className='font-bold text-3xl'>{title}</h2>
      <div className='mt-6'>
        {content}
        {dateString}
      </div>

      {/* <EditJournalForm journalId={journalPost.id} initialContent={journalPost.content} initialTitle={journal.title} /> */}
</>
)
};
