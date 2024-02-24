import axios from "axios";
import { FAKE_POPULAR } from "./FAKE_DATA";
import { API_KEY_PARAM, BASE_URL } from "./config";

//url to call
// https://api.themoviedb.org/3/discover/tv?api_key=42e443691af08774efb026edb81913b8&language=en-US&page=1&sort_by=popularity.desc
// apikey
// 42e443691af08774efb026edb81913b8



export class TVShowAPI {
    static async fetchPopular(){
        
        // const response = await axios.get(`${BASE_URL}${API_KEY_PARAM}&sort_by=popularity.desc`);
        // console.log(response.data.results)
        
        // return response.data.results
        return FAKE_POPULAR
    }
}