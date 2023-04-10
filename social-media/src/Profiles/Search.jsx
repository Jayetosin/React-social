import React from "react";
import {useState} from 'react'
import Details from "./Details";
import "../styles/style.css"

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const profile =[{Details}]
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if  (searchInput.length > 0) {
      profile.filter((person) => {
      return person.match(searchInput);
  });
  }
  
  return (
    <div>
      <input type="text"
       placeholder='Search by name'
        className='search' 
        onChange={handleChange}
        onInput={e => setSearchInput(e.target.value)}
        value={searchInput}
      />

    </div> 

  );
  }
export default Search
