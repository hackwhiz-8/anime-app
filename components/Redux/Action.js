import { FAVORITE, POPULAR_ANIME } from "./Constants";


export function popular_anime(payload){
    return{
        type:POPULAR_ANIME,
        data:payload
    }
}

export function popular_anime(payload){
    return{
        type:FAVORITE,
        data:payload
    }
}