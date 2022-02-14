import { Link } from 'react-router-dom';

const Items = (props) => {
  return (
    <>
      <h1>All Items</h1>
      <div className="row">
        {props.items.map(item =>
          <div key={item._id} className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                {item.imageUrl ?
                  <img src={item.imageUrl} className="card-img-bottom" alt=''></img>
                  : ''
                }
                {item.videoUrl ?
                  <video className='card-img-top'controls autoplay='true'>
                    <source src={item.videoUrl} type="video/mp4"/>
                  </video>
                  : ''
                }
              </div>
              <Link to='/itemDetails' state={item} className="btn btn-primary border border-dark">Details</Link>

              {props.user ?
                (props.user.isAdmin) &&
                <Link to="/editItem" className="btn btn-warning border border-dark" state={item}>Edit</Link>
                : ''
              }
              {props.user ?
                (props.user.isAdmin) &&
                <button onClick={() => props.handleDeleteItem(item._id)} className="btn btn-danger border border-dark">Delete</button>
                : ''
              }
            </div>
          </div>
        )}
      </div>
    </>

  );
}

export default Items;