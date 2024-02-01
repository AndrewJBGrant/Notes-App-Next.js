"use client";

import { useState } from "react";
import { useMarkdown } from "../context/markdown-provider";

export default function MardownInput() {

const [markdown, setMarkdown] = useMarkdown();
  const [words, setWords] =  useState(0);
  const [chars, setChars] =  useState(0);

  const getWordsCount = (str: any) => {
    return str.match(/(\w+)/g).length;
  };

  const getCharsCount = (str: string) => {
    return str.length;
  };



  const updateMarkdown = (event: any) => {
    const value = event.target.value;

    setMarkdown(value);
    setWords(getWordsCount(value));
    setChars(getCharsCount(value));
  };


  return (
    <section className="h-1/2">
        <h1>Markdown!!</h1>
<textarea className="bg-green-100 h-2/3 w-80" value={markdown}
onChange={updateMarkdown}>

</textarea>
    </section>
  );
}
