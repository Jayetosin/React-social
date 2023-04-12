import Search from "./Profiles/Search";
import Details from "./Profiles/Details";
import { useState } from "react";




export default  function Social () 
 {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch= (e) => {
    setSearchInput(e.target.value);
  }
 /*  const filtered =!searchInput? Details:
   Details.filter(item =>item.firstName.toLowerCase().includes(searchInput.toLowerCase())); */
  
  return(
    <div>
      <Search/>
      <Details/>

      <input type="text"
       placeholder='Search by first name'
        className='search' 
        onChange={handleSearch}
        value={searchInput}
        />
        
      {/* <>
      {filtered.map(item => {
        return(
          <div className="details">

          </div>
        )
      })}
      
      </>  */}

</div>
     
  )
  }
 