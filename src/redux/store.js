import { configureStore } from '@reduxjs/toolkit'
import movieSlice from '../redux/movieSlice'

export const store = configureStore({
    reducer: {
        movie: movieSlice
    },
})