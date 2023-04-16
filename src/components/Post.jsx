
import '../assets/css/post.css'
import { useState } from 'react'

function Post(props) {
    const {idu, username, texto} = props
    const [num, setNum] = useState(0)


    const handleClick = (ev) => {
        console.log('ha hecho click ' + num)
        setNum(num + 1)
    }

    return (
        <>
        <div className="container mt-3">
            <div className="card mb-3">
                <img src={`https://picsum.photos/id/${idu}/500/500`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col">
                            <p>
                                <small className="text-body-tertiary hora">3mins ago</small>
                            </p>
                        </div>
                        <div className="col-auto">
                            <button onClick={handleClick} type="button" className="btn btn-danger like"> 
                                <i className="fa-regular fa-heart"></i> {num}k
                            </button>
                        </div>
                    </div>
                    <h6 className='mt-3 user-post'>@{username}</h6>
                    <p className="card-text post-comm">
                        {texto}
                    </p>
                    <p className="card-text">
                        <small className="text-body-tertiary comm">
                            <i className="fa-regular fa-message fa-flip-horizontal"></i> Commets (15)
                        </small>
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}
  
export default Post;