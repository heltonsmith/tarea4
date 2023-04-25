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

export function postLike(idpost){

    //incrementa y decrementa cada vez que se da click en la interfaz y en la API
    //se recomienda subir una bandera a la API para saber si el usuario le ha dado like a un post
    //en caso contrario se pierde el estado del like al actualizar la interfaz, no basta con un codigo 204
    return axios
    .post("https://three-points.herokuapp.com/api/posts/"+idpost+"/like", null, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => {
        return res
    })
    .catch((error) => {
        return error
    })

}