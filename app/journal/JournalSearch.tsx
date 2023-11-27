"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const SearchBarJournal = () => {
  const router = useRouter();

  const placeHolderText = "search here for jouranl bits";
  const [value, setValue] = useState("");
  const [query] = useDebounce(value, 500);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setValue(target.value);
  };

  useEffect(() => {
    if (!query) {
      router.push(`/journal`);
    } else {
      router.push(`/journal?search=${query}`);
    }
  }, [query, router]);

  return (
    <>
      <input
        className="h-10 px-5 pr-10 w-2/3 rounded-md border border-red-600"
        type={"search"}
        name={"search"}
        placeholder={placeHolderText}
        onChange={searchHandler}
        // onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-5 mr-4 bg-slate-600"
      >
        Search
      </button>
    </>
  );
};

export default SearchBarJournal;
