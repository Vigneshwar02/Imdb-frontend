import React, { useEffect, useState } from "react"
import axios from "./axios"
import Search from "./components/Search"
import DisplayResult from "./components/DisplayResult"
import FormForMovie from "./components/FormForMovie"
import { useSelector, useDispatch } from "react-redux"
import { fetchMovies } from "./Redux/movieSlice"

export default function Home(){
    const movie=useSelector(state=>state.movie)
    const dispatch=useDispatch()
    const [bool, setBool]=useState(false)
    const [movieName, setMovieName] = useState('')
    const [yearOfRelease, setYearOfRelease] = useState('')
    const [producer, setProducer] = useState('')
    const [actors, setActors] = useState('')
    const [id,setId]=useState('')
    const [query,setQuery]=useState('')
    const [result,setResult]= useState([])
    const [submitBool, setSubmitBool]=useState(false)
    const [deleteBool, setdDeleteBool]=useState(false)


     const onSubmit = () => {
        
         const newMovie = {
             movieName: movieName,
             yearOfRelease: yearOfRelease,
             producer: producer,
             actors: actors
         }
         console.log(newMovie)
         axios.updateEntry(id,newMovie).then(res=>console.log(res))
         setSubmitBool(true)
         setTimeout(() => {
            setSubmitBool(false)
         }, 3000);
         setMovieName('')
         setYearOfRelease('')
         setProducer('')
         setActors('')
         setResult([])
         setBool(false)
         setQuery('')   
     }

     const handleQuery=(e)=>{
        setQuery(e.target.value)
        const searchQuery = movie.movieItems.filter(gi=>gi.movieName.toLowerCase().includes(query.toLowerCase()));
        setResult(searchQuery)
       
     }

     const handleName = (e) => {
         setMovieName(e.target.value)
     }

     const handleYear = (e) => {
         setYearOfRelease(e.target.value)
     }

     const handleProducer = (e) => {
         setProducer(e.target.value)
     }

     const handleActors = (e) => {
         setActors(e.target.value)
     }

     const handleBlur = () => {
         setQuery("")
         
     }

    const handleClick=(id)=>{
        if(!bool)
        {
            setBool(true)
            setId(id)
        }
        else
       { 
            setBool(false)
            setId('')
        }
    }

    const handleDelete=(e,id)=>{
        e.preventDefault()
        axios.deleteEntry(id)
        setdDeleteBool(true)
        setTimeout(() => {
            setdDeleteBool(false)
        }, 3000);
        setMovieName('')
        setYearOfRelease('')
        setProducer('')
        setActors('')
        setResult([])
        setBool(false)
        setQuery('')
    }

    const handleSearchCick=()=>{
        setBool(false)
        setId('')
        setResult([])
    }

    

    useEffect(()=>{
        dispatch(fetchMovies())
    },[query])
    
    return(
        <div>
            <Search handleSearchClick ={handleSearchCick}handleQuery={handleQuery} query={query} handleBlur={handleBlur} />
            <div>
                {result.map((res,index)=><DisplayResult res={res} handleClick={handleClick} handleDelete={handleDelete}/>)}
            </div>

            <div style={{Postion:"sticky"}}>
                {bool&&<FormForMovie onSubmit={onSubmit} movieName={movieName} handleName={handleName} yearOfRelease={yearOfRelease} handleYear={handleYear} actors={actors} handleActors={handleActors} handleProducer={handleProducer} />}
            </div>
            
            {submitBool&&<div><h1 class="py-8 text-center lg:text-5xl text-2xl text-tertiary mb-7">Updated Successfully</h1></div>}
            {deleteBool&&<div><h1 class ="py-8 text-center lg:text-5xl text-2xl text-tertiary mb-7">Deleted successfully</h1></div>}
        </div>

        
    )
}

