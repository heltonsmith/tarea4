
import axios from "axios"

export const token = localStorage.getItem("token")

export function getLogin(user, pass){

    return axios
    .post("https://three-points.herokuapp.com/api/login",
    {
        username: user,
        password: pass
    })
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        return res
    })
    .catch((error) => {
        return error
    });
    

}