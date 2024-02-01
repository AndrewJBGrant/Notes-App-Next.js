"use client";

import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI


interface SearchBarProps {
  type: string;
}

const SearchBar: React.FC<SearchBarProps> = ({type}) => {

  // console.log(typeof(SearchBar), "What is the Search bar??")

const [searchQuery, setSearchQuery] = useState("")
const [debouncedValue] = useDebounce(searchQuery, 1000)
const placeHolderText = "Search here...";

const router = useRouter();

const handleInputChange = (e: any) => {
  setSearchQuery(e.target.value)
  console.log(e.target.value, "target.value")
}

useEffect(() => {
  if(!debouncedValue) {
    router.push(`${type}`)
  } else {
  router.push(`/${type}?search=${debouncedValue}`)
  //console.log(searchQuery, "first useEffect")
  }
}, [debouncedValue, router, type])

// const orignalJSX =   <input
//     value={searchQuery}
//     onChange={handleInputChange}
//       className="w-2/3"
//       placeholder={placeHolderText}
//     />

//     console.log(orignalJSX.key, "key")
//     console.log(orignalJSX.props, "props")
//     console.log(orignalJSX.type, "type")


  return (
    <input
    value={searchQuery}
    onChange={handleInputChange}
      className="w-2/3"
      placeholder={placeHolderText}
    />
  );
};

export default SearchBar;
