import React from "react";

export default function DisplayResult({res,handleClick,handleDelete}){
    return(
        <div   class="text-center bg-primary flex flex-1 flex-col gap-6 p-14  lg:text-lg  text-tertiary text-lg">
                        <p>{res.movieName}</p>
                        <p>{res.yearOfRelease}</p>
                        <p>{res.producer}</p>
                         <ul>
                            {res.actors.map(actor=><li class="list-disc text-center">{actor}</li>)}
                        </ul>
                        <button type="submit" class="bg-secondary px-6 py-2.5  text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-80 duration-300" onClick={(e)=>handleClick(res.id)}>Edit</button>
                        <button type="submit" class="bg-secondary px-6 py-2.5  text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-80 duration-300" onClick={(e)=>handleDelete(e,res.id)}>Delete</button>
                    </div>
    )
}