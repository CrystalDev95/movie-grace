import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: [],
    genres: {},
}


export const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers: {
        setApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        }
    }
})


export const selectUrl = (state) => state.movie.url;
export const selectGenres = (state) => state.movie.genres;
export const { setApiConfiguration, setGenres } = movieSlice.actions
export default movieSlice.reducer;