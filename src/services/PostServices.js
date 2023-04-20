
import axios from "axios"
import { token } from "./LoginServices"
//import { token } from "./LoginServices"

export function getPosts(){

    return axios
    .get("https://three-points.herokuapp.com/api")
    .then((res) => {
        debugger
        return res
    })

    /*
    return axios
    .get("https://three-points.herokuapp.com/api", {
        // headers: {
        //      Authorization: `Bearer ${token}`
        // }
    })
    .then((res) => {
        debugger
        return res
    })
    */
    
}