
import { useState, useEffect } from "react";
import { getPosts } from "../services/PostServices";
import Post from "./Post";
import Busqueda from "./Busqueda";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
  
    console.log("PostList Render");
    console.log("Get Posts");
  
    useEffect(() => {
      console.log("PostList Mount");
      setIsLoading(true);
      try {
        getPosts()
          .then((data) => {
            setPosts(data);
          })
          .catch((error) => {
            // Manejar el error si es necesario
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (error) {
        // Manejar el error si es necesario
        setIsLoading(false);
      }
    }, []);
  
    const handleSearchTextChange = (newSearchText) => {
      setSearchText(newSearchText);
    };
  
    const filteredPosts = searchText
      ? posts.filter((post) => post.us.includes(searchText))
      : posts;
  
    return (
      <>
        <Busqueda onSearchTextChange={handleSearchTextChange} />
        <div>
          {isLoading ? (
            <div className="d-flex justify-content-center mt-5 pt-5">
              <div className="spinner-border mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((post, i) => (
              <Post key={i} idu={post.id} username={post.us} texto={post.texto} />
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </div>
      </>
    );
}
   
export default PostList;
  