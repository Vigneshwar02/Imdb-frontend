import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    movieItems:[],
    loading:false,
    error:''
}

export const fetchMovies =createAsyncThunk('movie/fetchMovies',()=>{
     return axios.get("/api/movie").then(response => response.data)
})

const movieSlice = createSlice({
    name:'movie',
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchMovies.pending, (state) => {
            state.loading =true
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.movieItems=action.payload
            state.error = ''
        })
        builder.addCase(fetchMovies.rejected, (state,action) => {
            state.loading = false
            state.movieItems=[]
            state.error = action.error.message   
        })
        
    }
})


export default movieSlice.reducer