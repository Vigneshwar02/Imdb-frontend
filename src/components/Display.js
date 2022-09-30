import React from "react";

export default function Display({res}){
    return(
        <div class="text-center bg-primary flex  flex-col gap-6 p-4 lg:text-lg  text-tertiary text-lg">
                        <p>{res.movieName}</p>
                        <p>{res.yearOfRelease}</p>
                        <p>{res.producer}</p>
                        <ul>
                            {res.actors.map(actor=><li class="list-disc text-center">{actor}</li>)}
                        </ul>
                    </div>
    )
}