"use client";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";

function localStorageValue(key: string, intialValue: string) {
// Here we are passing intial state function so logic is only executed once
const [storedValue, setStroredValue] = useState(() => {
try {
// get local storage value
const item = window.localStorage.getItem(key);
// Parse
return item ? JSON.parse(item) : intialValue;
} catch (error) {
  console.log(error, "error, returning intial value");
  return intialValue;
}
});

// useEffect to change local storage value as state changes
useEffect(() => {
try {
  const valueToStore =
  typeof storedValue === "function"
  ? storedValue(storedValue)
  : storedValue;

  // Saving the state
  window.localStorage.setItem(key, JSON.stringify(valueToStore));
} catch (error) {
  console.log(error, "trying to save new value")
}
}, [key, storedValue]);
return [storedValue, setStroredValue]
}

export default localStorageValue;
