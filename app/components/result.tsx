import ReactMarkdown from "react-markdown";
import { useMarkdown } from "../context/markdown-provider";


export default function Result(props: any) {

const [markdown] = useMarkdown();

  return (
    <section className="h-1/2">
      <h1>Result!!</h1>

<aside className="bg-green-100 h-2/3 w-80 prose">
<ReactMarkdown>{markdown}</ReactMarkdown>
</aside>


    </section>
  );
}
