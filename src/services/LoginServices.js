
import axios from "axios"

export const token = localStorage.getItem("token")
export const usernameid = localStorage.getItem("usernameid")

export function getLogin(user, pass){

    return axios
    .post("https://three-points.herokuapp.com/api/login",
    {
        username: user,
        password: pass
    })
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("usernameid", user)
        return res
    })
    .catch((error) => {
        return error
    });
    

}