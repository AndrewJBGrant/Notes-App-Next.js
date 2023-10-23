"use client";

import { useSearchParams } from "next/navigation"

const SearchPage = () => {

const search = useSearchParams();
const searchQuery = search ? search.get("q") : null;

const encodedSearchQuery = encodeURI(searchQuery || "");
console.log("get request..", encodedSearchQuery)


return(
  <section>Search Page here...
    {search}

    Also no q!...{searchQuery}
  </section>
);
};


export default SearchPage;
