import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


const journalPosts = [

{
  title: "Finding Stillness",
  slug: "finding-stillness",
  content:
    "In the quiet of my study, I begin my odyssey into Zen Buddhism through the art of storytelling. Each word I type carries the weight of mindfulness. It's a journey to find stillness within the chaos of creativity.",
},

{
  title: "Meditations on Paper",
  slug: "meditations-on-paper",
  content:
    "Today, I sit with my characters, mirroring the Zen meditator. With each stroke of the keyboard, I explore the depths of consciousness. The novel is becoming a mirror reflecting the present moment.",
},

{
  title: "Zen of Writing",
  slug: "zen-of-writing",
  content:
    "Writing this novel feels like walking the path of enlightenment. As my characters seek meaning in their lives, so do I in my words. The simplicity of Zen Buddhism infuses every sentence, guiding me.",
},

{
  title: "Awakening Creativity",
  slug: "awakening-creativity",
  content:
    "In the pages of my novel, the characters embark on a spiritual journey. They teach me that creativity is a form of awakening. Writing about Zen Buddhism has become a meditation in itself.",
},

{
  title: "Zen in Every Chapter",
  slug: "zen-in-every-chapter",
  content:
    "With each chapter I write, I dive deeper into the essence of Zen. The novel is no longer just a story but a spiritual exploration. It's a quest for enlightenment, and I am both the writer and the seeker.",
}
];


export async function GET() {

  const serverSession = await getServerSession();

  return NextResponse.json(journalPosts);

}
