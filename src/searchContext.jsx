import React from "react";
import { createContext } from "react";
import { snacks } from "./backend/data";
import { useState } from "react";
export const Search = createContext();
export default function SearchContext({ children }) {
  const [items, setItems] = useState(snacks);
  const searchHandler = (text) => {
    const temp =
      text.length > 0
        ? snacks.filter((item) =>
            item.product_name.toLowerCase().includes(text.toLowerCase())
          )
        : snacks;
    setItems(temp);
  };
  const IdSort=()=>{
    const temp=snacks.sort((a,b)=>b.id-a.id)
    setItems(temp)
  }
  const nameSort = () => {
    const temp = snacks.sort((a, b) => a.product_name - b.product_name);
    setItems(temp);
    console.log(snacks.sort((a, b) => a.product_name - b.product_name))
  };
  
  const weightSort = () => {
    const temp = snacks
      .map((item) => item)
      .sort((a, b) => a.product_weight - b.product_weight);
    setItems(temp);
  };
  const priceSort = () => {
    const temp = snacks.sort((a, b) => a.price - b.price);
    setItems(temp);
  };
  const caloriesSort = () => {
    const temp = snacks.sort((a, b) => a.calories - b.calories);
    setItems(temp);
    console.log(temp,"temp")
  };
console.log(items,"items")
  return (
    <Search.Provider
      value={{
        searchHandler,
        items,
        nameSort,
        weightSort,
        priceSort,
        caloriesSort,
        IdSort
      }}
    >
      {children}
    </Search.Provider>
  );
}
