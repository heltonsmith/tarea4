import Post from "./Post"
import Busqueda from './Busqueda'
import { useEffect, useState } from "react"
import { getPosts } from "../services/PostServices"

function PostList() { 
  const [posts, setPosts] = useState([])
  const [cargando, setCargando] = useState(0)
  const [busqueda, setBusqueda] = useState("")


  useEffect(() => {

    getPosts().then(data => {
      setCargando(0)
      setPosts(data.data)
    })
    .finally(() => {
      setCargando(1)
    })
    
  }, [])

  //funcion cuando estoy escribiendo cambia el estado
  const cambiarBusqueda = (nuevaBusqueda) => {
    setBusqueda(nuevaBusqueda.trim().toLowerCase());
  };

  //array que tendrá elementos filtrados
  const postFiltrados = busqueda
    ? posts.filter(
        (post) => 
          post.text
          .toLowerCase()
          .includes(busqueda)
      )
    : posts


  if(cargando === 0){
    return (
      <div className="d-flex justify-content-center mt-5 pt-5">
        <div className="spinner-border mt-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if(postFiltrados.length > 0){
    return (
      <div>
        <Busqueda cambiarBusqueda={cambiarBusqueda} />
        {
          postFiltrados
          .map((post, i) => (
            <Post 
            key={i} 
            fecha={post.createdAt}
            nombre={post.author.name}
            us={post.author.username}
            //pongo una imagen por defecto en caso de que la api no contenga imágenes
            img={post.image ? post.image : "https://keystoneacademic-res.cloudinary.com/image/upload/element/17/172146_172099_Logo3P_cuadrado_HQ.jpg"}
            texto={post.text}
            comm={post.comments.length}
            likes={post.likes}
            />
          ))
        }
      </div>
    )
  }
  else{
    return (
      <div>
        <Busqueda cambiarBusqueda={cambiarBusqueda} />
        <h4 className="text-center mt-5 pt-5">No se encontraron resultados.</h4>
      </div>
    )
  }

}
   
export default PostList
  