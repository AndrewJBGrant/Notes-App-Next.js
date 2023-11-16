"use client";

import { ChangeEvent, useState } from "react";

// export default function SearchTest( { onSearch }) {
// const [ searchTerm, setSearchTerm] = useState("");

// const handleSearch = () => {
//   onSearch(searchTerm);
// }

// return (
//   <>
//   <input type="text"
//   placeholder="Testing the search..."
//   value={searchTerm}
//   onChange={(e) => setSearchTerm(e.target.value)} />
// <button onClick={handleSearch}>Search</button>
//   </>
// )
// };


export type SearchProps = {
  onSearch: (value: string) => void;
}


const SearchBar = (props: SearchProps) => {
const { onSearch } = props;
const placeHolderText = "Enter Search..."
const [value, setValue] = useState(placeHolderText)


const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
  const { target } = e;
  setValue(target.value)
  console.log(value)
}

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    onSearch(value)
    console.log(e, "enter has been clicked 🚀")
  };
};



  return (
    <>
      <input
        className="h-10 px-5 pr-10 w-full rounded-md border border-red-600"
        type={"search"}
        name={"search"}
        placeholder={placeHolderText}
        onChange={searchHandler}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" className="mt-3 bg-green-600">
        SearchButton
      </button>
    </>
  );
};

export default SearchBar;
