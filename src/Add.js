import React, { useState } from "react"
import axios from "./axios"
import FormForMovie from "./components/FormForMovie"


export default function Add() {

    const [movieName,setMovieName]=useState('')
    const [yearOfRelease, setYearOfRelease]=useState('')
    const [producer, setProducer]= useState('')
    const [actors, setActors] = useState('')
    const [submitBool,setSubmitBool]=useState('')

    const onSubmit=()=>{
        const newMovie={
            movieName: movieName,
            yearOfRelease: yearOfRelease,
            producer:producer,
            actors:actors
        }

        axios.createEntry(newMovie)
        setSubmitBool(true)
        setTimeout(() => {
            setSubmitBool(false)
        }, 3000);
        setMovieName('')
        setYearOfRelease('')
        setProducer('')
        setActors('')
        
    }

   const handleName=(e)=>{
        setMovieName(e.target.value)
   }
   
   const handleYear = (e) => {
        setYearOfRelease(e.target.value)
   }
   
   const handleProducer = (e) => {
       setProducer(e.target.value)
   }

   const handleActors = (e)=>{
    setActors(e.target.value)
   }

    return (
        <div>
            <h1>You're in the Add  page</h1>   
            <FormForMovie onSubmit={onSubmit} movieName={movieName} handleName={handleName} yearOfRelease={yearOfRelease} handleYear={handleYear} producer={producer} actors={actors} handleActors={handleActors} handleProducer={handleProducer} />
            <div>
                {submitBool&&<div><h1 class="py-8 text-center lg:text-5xl text-2xl text-tertiary mb-7">Added movie Successfully, return to the home screeen to see the change!</h1></div>}
            </div>
        </div>
    )
}