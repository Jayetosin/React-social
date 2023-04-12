import React from "react";
import {useState} from 'react'
import "../styles/style.css"
import Details from "./Details";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }
  const filtered =!searchInput? Details:
    Details.filter(item =>
    item.firstName.toLowerCase().includes(searchInput.toLowerCase()))
  
  return (
    <div>
      <input type="text"
       placeholder='Search by first name'
        className='search' 
        onChange={handleChange}
        value={searchInput}
      />
      <>
      {filtered.map(item => {
        return(
          <div className="details">

          </div>
        )
      })}
      
      </>
     
    
    </div> 

  );
      }
export default Search
