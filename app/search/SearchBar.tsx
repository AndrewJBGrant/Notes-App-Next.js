"use client";

import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI


interface SearchBarProps {
  type: string;
}

interface SearchResult {
    start: number;
    end: number;
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

//     console.log(orignalJSX.key, "key")
//     console.log(orignalJSX.props, "props")
//     console.log(orignalJSX.type, "type")

    // Function to find all occurrences of a search query in the text
    const findOccurrences = (text: string, query: string): SearchResult[] => {
        const results: SearchResult[] = [];
        const regex = new RegExp(query, 'gi');
        let match;
        while ((match = regex.exec(text)) !== null) {
            results.push({
                start: match.index,
                end: match.index + match[0].length,
            });
        }
        return results;
    };

    // Function to highlight occurrences of the search query in the text
    const highlightText = (text: string, occurrences: SearchResult[]): React.ReactNode => {
        let highlightedText: React.ReactNode[] = [];
        let lastIndex = 0;

        for (const occurrence of occurrences) {
            // Append the text before the occurrence
            highlightedText.push(text.substring(lastIndex, occurrence.start));
            // Append the occurrence wrapped in a span with a CSS class for highlighting
            highlightedText.push(
                <span className="bg-yellow-500 font-bold">{text.substring(occurrence.start, occurrence.end)}</span>
            );
            lastIndex = occurrence.end;
        }

        // Append the remaining text after the last occurrence
        highlightedText.push(text.substring(lastIndex));

        return highlightedText;
    };

    const occurrences = findOccurrences(placeHolderText, searchQuery);




  return (
    <>
    <input
    value={searchQuery}
    onChange={handleInputChange}
      className="w-full"
      placeholder={placeHolderText}
    />
    <h2 className="border border-red-600">{highlightText(placeHolderText, occurrences)}</h2>
    </>
  );
};

export default SearchBar;
