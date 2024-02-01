"use client";
import { useState } from "react";
import Result from "../components/result";
import MarkdownInput from "../components/markedInput";
import MarkdownProvider from "../context/markdown-provider";

export default function MarkdownPage() {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <>
      <MarkdownProvider>
        <section className="flex  flex-col divide-y-4 items-center m-8 px-3 border border-green-600 w-full h-screen">
          <MarkdownInput />
          <Result />
        </section>
      </MarkdownProvider>
    </>
  );
}
