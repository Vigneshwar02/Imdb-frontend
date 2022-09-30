import React from "react";

export default function Search({handleSearchClick,handleQuery,handleBlur,query}){
     
     return(
        <input class=" mt-5 lg:w-3/4 w-48 block my-0 mx-auto text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" type="text" onClick={handleSearchClick} onChange={handleQuery} value={query} placeholder="Enter name of movie" onBlur={handleBlur}></input>
    )
    
}