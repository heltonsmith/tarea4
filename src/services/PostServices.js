import axios from "axios"
import { token } from "./LoginServices"

export function getPosts(){
   
    return axios
    .get("https://three-points.herokuapp.com/api/posts", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => {
        return res
    })
    
}