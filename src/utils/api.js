import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_APP_TMDB_API;



export const fetchDataFromApi = async (url) => {
    try {
        const {data} = await axios.get
        (`https://api.themoviedb.org/3${url}?api_key=${API_KEY}`);
        return data;
    } catch (err) {
        console.log(err, "Sorry error");
        return err;
    }
}


