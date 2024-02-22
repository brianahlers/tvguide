import axios from "axios";

//url to call
// https://api.themoviedb.org/3/discover/tv?api_key=42e443691af08774efb026edb81913b8&language=en-US&page=1&sort_by=popularity.desc
// apikey
// 42e443691af08774efb026edb81913b8

const BASE_URL = "https://api.themoviedb.org/3/discover/tv"
const API_KEY_PARAM = "?api_key=42e443691af08774efb026edb81913b8"

export class TVShowAPI {
    static async fetchPopular(){
        //perform request
        const response = await axios.get(`${BASE_URL}${API_KEY_PARAM}&sort_by=popularity.desc`);
        console.log(response.data.results)
        // return response
        return response.data.results
    }
}