"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook


const SearchInput = () => {

const [searchQuery, setSearchQuery] = useState("")
const router = useRouter();
const onSearch = (e: React.FormEvent) => {
e.preventDefault();

const encodedSearchQuery = encodeURI(searchQuery)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
router.push(`/search?q=${encodedSearchQuery}`);

console.log("Searching...", searchQuery)
}


// useEffect(() => {
//   console.log(searchQuery)
// }, [searchQuery])

  return (
<form className="flex justify-center border-solid border-2 border-indigo-600" onSubmit={onSearch}>
    <input
    value={searchQuery}
    onChange={e => setSearchQuery(e.target.value)}
      className="px-5 py-1 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800"
      placeholder="What are you trying to find?"
    />
    </form>
  );
};

export default SearchInput;
