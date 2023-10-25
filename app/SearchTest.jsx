"use client";

import { useState } from "react";

export default function SearchTest( { onSearch }) {
const [ searchTerm, setSearchTerm] = useState("");

const handleSearch = () => {
  onSearch(searchTerm);
}

return (
  <>
  <input type="text"
  placeholder="Testing the search..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)} />
<button onClick={handleSearch}>Search</button>
  </>
)
};
