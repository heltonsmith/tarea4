
import { useState } from 'react';
import '../assets/css/post.css'

function Post({id, us, img, texto, comm}) {
    const [like, setLike] = useState(0)

    const megusta = (ev) => {
        console.log('ha hecho click ' + like)
        setLike(like + 1)
    }

    return (
        <div className="container mt-3">
            <div className="card mb-3">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col">
                            <p>
                                <small className="text-body-tertiary hora">3mins ago - id/{id}</small>
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
    );
}
  
export default Post;