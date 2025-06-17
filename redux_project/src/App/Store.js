import { configureStore } from "@reduxjs/toolkit";
import todoreducer from '../features/todoslice'

export const store =configureStore({
    reducer : todoreducer
})