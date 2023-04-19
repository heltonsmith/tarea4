
import axios from "axios"
import { token } from "./LoginServices"

export function getPosts(){

    return axios
    .get("https://globalmakermedia.blob.core.windows.net/core/misc/got.json", {
        // headers: {
        //     Authorization: `Bearer ${token}`
        // }
    })
    .then((res) => {
        return res.data.episodes
    })
    
}