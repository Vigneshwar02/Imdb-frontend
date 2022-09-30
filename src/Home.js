import React, { useEffect, useState } from "react"
import Search from "./components/Search";
import Display from "./components/Display"
import { useSelector,useDispatch } from "react-redux";
import { fetchMovies } from "./Redux/movieSlice";


export default function Home(){
    const [query, setQuery] = useState('')
    const [result, setResult] = useState([])
    const movie=useSelector((state)=>state.movie);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchMovies())
    },[])

    const handleQuery = (e) => {
        setQuery(e.target.value)
        const searchQuery = movie.movieItems.filter(gi => gi.movieName.toLowerCase().includes(query.toLowerCase()));
        setResult(searchQuery)

    }

    const handleBlur=()=>{
        setQuery("")
        setResult([])
    }
    
    return(
        <div>
           
            <h1 class="py-8 text-center lg:text-5xl text-2xl text-tertiary mb-7">Explore Movies</h1>
            <Search handleQuery={handleQuery} query={query} handleBlur={handleBlur}/>
            <div>
                {result.map((res,index)=>
                    <Display res={res} />
                )}
            </div>
            <div>
                <div class="grid lg:grid-cols-3 grids-cols-1 gap-3  p-10">
                {movie.movieItems.map((res,index)=><Display res={res}/>)}
            </div>
            </div>
           
        </div>
    )
}

