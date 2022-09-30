import { Form, Button } from 'semantic-ui-react';
import {useForm} from "react-hook-form"
import React from 'react';

export default function FormForMovie({onSubmit,movieName,handleName,yearOfRelease,handleYear,producer,handleProducer,actors,handleActors}){
    const {register, handleSubmit, formState: {errors}}= useForm()
    return(
        <div class="text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
                <div class="block  my-8">
                    <label class="text-tertiary text-sm w-[300px] inline-block">Movie Name:</label><input {...register("movieName", {required:true, pattern:/^[a-zA-Z0-9,.' :-]+$/gim})}  value={movieName} onChange={handleName}></input>
                    {errors.movieName?.type==='required'&&<p class="py-8 text-center lg:text-5xl text-2xl text-tertiary mb-7">Movie name is required</p>}
                    {errors.movieName?.type==='pattern'&&<p class="py-8 text-center lg:text-5xl text-2xl text-tertiary mb-7">Only numbers characters and certain special characters are accepted.</p>}
                </div>
                
            </Form.Field>
            <Form.Field>
                <div class="block  my-8">
                    <label class="text-tertiary text-sm w-[300px] inline-block">Year of release:</label><input {...register("yearOfRelease", {required:true, pattern:/[0-9]/gi,minLength:4,maxLength:4})} value={yearOfRelease} onChange={handleYear}></input>
                    {errors.yearOfRelease?.type==='required'&&<p class="py-8 text-center lg:text-5xl text-2xl text-tertiary mb-7">Year is required</p>}
                    {errors.yearOfRelease?.type==="pattern"&&<p class="py-8 text-center lg:text-5xl text-2xl text-tertiary mb-7">Only numbers are accepted</p>}
                    {errors.yearOfRelease?.type==="minLength"&&<p class="py-8 text-center lg:text-5xl text-2xl text-tertiary mb-7">please mention a valid year (4 digits)</p>}
                    {errors.yearOfRelease?.type==="maxLength"&&<p class="py-8 text-center lg:text-5xl text-2xl text-tertiary mb-7">Please mention a vaild year (4 digits)</p>}
                </div>
                
            </Form.Field>
            <Form.Field>
                <div class="block  my-8">
                    <label class="text-tertiary text-sm w-[300px] inline-block">Producer:</label><input {...register("producer", {required:true, pattern:/^[a-z .'-]+$/gim})} value={producer} onChange={handleProducer}></input>
                    {errors.producer?.type==='required'&&<p class="py-8 text-center lg:text-5xl text-2xl text-tertiary mb-7">Producer name is required</p>}
                    {errors.producer?.type==='pattern'&&<p class="py-8 text-center lg:text-5xl text-2xl text-tertiary mb-7">only a single producer is accepted, no numbers.</p>}

                </div>
                
            </Form.Field>
            <Form.Field>
                <div class="block  my-8">
                    <label class="text-tertiary text-sm w-[300px] inline-block">Actors:</label><input {...register("actors", {required:true,pattern:/[,-a-zA-Z0-9-,()]+(,\s+[-a-zA-Z0-9-()]+)*$/gi})} value={actors} onChange={handleActors}></input>
                    {errors.actors?.type==='required'&&<p class="py-8 text-center lg:text-5xl text-2xl text-tertiary mb-7">Name of actor(s) is(are) required</p>}
                    {errors.actors?.type==='pattern'&&<p class="py-8 text-center lg:text-5xl text-2xl text-tertiary mb-7">Only characters, numbers and comma(special character) are accepted. No whitespace at the end</p>}
                </div>
                
            </Form.Field>
                <button type="submit" class="bg-secondary px-6 py-2.5  text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Submit</button>
                </form>
        </div>
    )
}