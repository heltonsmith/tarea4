
import Post from "./Post";
import Busqueda from './Busqueda';
import { useEffect, useState } from "react";
import { getPosts } from "../services/PostServices";

function PostList() { 
  const [posts, setPosts] = useState([])
  const [cargando, setCargando] = useState(0)
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    getPosts().then(data => {
      setCargando(0)
      setPosts(data)
    })
    .finally(() => {
      setCargando(1);
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
          post.summary
          .toLowerCase()
          .includes(busqueda)
      )
    : posts;


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
            fecha={post.airdate}
            hora={post.airtime}
            us={post.name}
            img={post.image.medium}
            texto={post.summary}
            comm={post.id}
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
   
export default PostList;
  