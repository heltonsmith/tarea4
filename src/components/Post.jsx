
import '../assets/css/post.css'
import imagen from '../assets/img/img-post.jpg'

function Post() {
    return (
        <>
        <div className="container mt-3">
            <div className="card mb-3">
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col">
                            <p>
                                <small className="text-body-tertiary hora">3mins ago</small>
                            </p>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-danger like"> 
                                <i class="fa-regular fa-heart"></i> 43k
                            </button>
                        </div>
                    </div>
                    <h6 className='mt-3 user-post'>@eric</h6>
                    <p className="card-text post-comm">
                        This is a wider card with supporting text 
                        below as a natural lead-in to additional content.
                    </p>
                    <p className="card-text">
                        <small className="text-body-tertiary comm">
                            <i class="fa-regular fa-message fa-flip-horizontal"></i> Commets (15)
                        </small>
                    </p>
                </div>
            </div>
        </div>
        </>
    );
  }
  
export default Post;