import axios from "axios";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;



export const fetchDataFromApi = async (url) => {
    try {
        const {data} = await axios.get
        (`https://api.themoviedb.org/3${url}`, {
            headers:{
                'Authorization':`Bearer ${TMDB_TOKEN}`
            }
        });
        return data;
    } catch (err) {
        console.log(err, "Sorry error");
        return err;
    }
}


