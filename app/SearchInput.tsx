"use client";

import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook


const SearchInput = () => {

const [searchQuery, setSearchQuery] = useState("")
const [debouncedValue] = useDebounce(searchQuery, 1000)
// const [debouncedInputValue, setDebouncedInputValue] = useState("")



const router = useRouter();
// const onSearch = (e: React.FormEvent) => {
// e.preventDefault();

// const encodedSearchQuery = encodeURI(searchQuery)
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
// router.push(`/search?q=${encodedSearchQuery}`);

// console.log("Searching...", searchQuery)
// }

const handleInputChange = (e: any) => {
  setSearchQuery(e.target.value)
  console.log(e.target.value, "target.value")
}
// useEffect(() => {
//   const timeOutId = setTimeout(() => {
//     setDebouncedInputValue(searchQuery);
//   }, 1000);
//   console.log("Here we are debouncing", timeOutId)
//   return () => clearTimeout(timeOutId)
// }, [searchQuery, 1000])

useEffect(() => {
  if(!debouncedValue) {
    router.push(`/notes`)
  } else {
  router.push(`/notes?search=${debouncedValue}`)
  //console.log(searchQuery, "first useEffect")
  }
}, [debouncedValue, router])


  return (
    <>
{/* <form className="flex justify-center border-solid border-2 border-indigo-600" onSubmit={onSearch}> */}
    <input
    value={searchQuery}
    onChange={handleInputChange}
    //onChange={e => setSearchQuery(e.target.value)}
      className="px-5 py-1 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800"
      placeholder="What are you trying to find?"
    />
    UserInput: {searchQuery}
    Debounced value:{debouncedValue}
    </>
  );
};

export default SearchInput;
