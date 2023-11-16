"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useSearchParams } from 'next/navigation'


// export type SearchProps = {
//   onSearch: (value: string) => void;
// }

const SearchBar = () => {
  const router = useRouter();

  // const searchParams = useSearchParams()
  //  const search = searchParams.get('search')
  //  console.log(search, "coming from client searchBar")
  // // const { onSearch } = props;

  const placeHolderText = "Enter Search...";
  const [value, setValue] = useState(placeHolderText);
  const [query] = useDebounce(value, 500);



  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setValue(target.value);
    // console.log(value)
  };

  useEffect(() => {
    if (!query) {
      router.push(`/notes`);
    } else {
      router.push(`/notes?search=${query}`);
    }
  }, [query, router]);



  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     onSearch(value)
  //     console.log(e, "enter has been clicked 🚀")
  //   };
  // };

  return (
    <>
      <input
        className="h-10 px-5 pr-10 w-full rounded-md border border-red-600"
        type={"search"}
        name={"search"}
        placeholder={placeHolderText}
        onChange={searchHandler}
        // onKeyDown={handleKeyDown}
      />
      <button type="submit" className="mt-3 bg-green-600">
        SearchButton
      </button>
    </>
  );
};

export default SearchBar;
