import { useState } from 'react'
import '../assets/css/post.css'
import { postLike } from '../services/PostServices'

function Post({fecha, nombre, us, img, texto, comm, likes, id}) {
    const [like, setLike] = useState(likes)

    const megusta = (ev) => {
        console.log('ha hecho click ' + like)
        postLike(id)
        //incrementa y decrementa cada vez que se da click en la interfaz y en la API
        //se recomienda subir una bandera a la API para saber si el usuario le ha dado like a un post
        //en caso contrario se pierde el estado del like al actualizar la interfaz, no basta con un codigo 204
        //para no perder el estado del like
        setLike(like === likes ? like+1 : like-1);
    }

    return (
        <div className="container mt-3">
            <div className="card mb-3">
                <img src="https://picsum.photos/id/22/500/500" className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col">
                            <p>
                                <small className="text-body-tertiary hora">{fecha} <br /> {nombre}</small>
                            </p>
                        </div>
                        <div className="col-auto">
                            <button type="button" 
                            className="btn btn-danger like"
                            onClick={megusta}
                            > 
                                <i className="fa-regular fa-heart"></i> {like}
                            </button>
                        </div>
                    </div>
                    <h6 className='mt-3 user-post'>@{us}</h6>
                    <p className="card-text post-comm">
                        {texto}
                    </p>
                    <p className="card-text">
                        <small className="text-body-tertiary comm">
                            <i className="fa-regular fa-message fa-flip-horizontal"></i> Commets ({comm})
                        </small>
                    </p>
                </div>
            </div>
        </div>
    )
}
  
export default Post