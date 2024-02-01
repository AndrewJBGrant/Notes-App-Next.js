import Result from "../components/result";
import MarkdownInput from "../components/markedInput";


export default function MarkdownPage() {

  return (
    <>
      <section className="flex  flex-col divide-y-4 items-center m-8 px-3 border border-green-600 w-full h-screen">
<MarkdownInput />
<Result />
 </section>
    </>
  );
}
