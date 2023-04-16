
import data from "../json/posts.json"

export function getPosts(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.posteos)
        }, Math.random() * 2000)
    })
}