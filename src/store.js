import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Redux/movieSlice"
export const store = configureStore({
    reducer:{
        movie:movieReducer,
    },
});

