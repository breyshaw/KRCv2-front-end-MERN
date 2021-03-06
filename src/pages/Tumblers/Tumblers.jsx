import { Link } from 'react-router-dom';
import styles from '../Landing/Landing.module.css'
import { useState } from 'react';

const Tumblers = (props) => {
  const [formData, setFormData] = useState({
    filter: "all",
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const { filter } = formData
  return (
    <main className={styles.container}>
      <h1>Tumblers</h1>
      <form
        className={styles.container}
        autoComplete="off"
      >
        <div className="btn-group">
          <select name="filter"
            className='btn btn-primary dropdown-toggle' data-toggle="dropdown" aria-expanded='false'
            value={filter}
            onChange={handleChange}
          >
            <option value="all">All Tumblers</option>
            <option value="holiday">Holiday</option>
            <option value="mom">Mom</option>
            <option value="baby">Baby</option>
            <option value="sports">Sports</option>
            <option value="movies_shows">Movies and Shows</option>
            <option value="custom_order">Custom orders</option>
          </select>
        </div>
      </form>

      {filter === "all" ?
        <div className="row">
          {props.items
            .filter(item => item.type === 'tumblers')
            .map(item =>
              <div key={item._id} className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    {item.imageUrl ?
                      <img src={item.imageUrl} className="card-img-bottom" alt=''></img>
                      : ''
                    }
                    {item.videoUrl ?
                      <video className='card-img-top' autoplay='true'>
                        <source src={item.videoUrl} type="video/mp4" />
                      </video>
                      : ''
                    }
                    <p className="card-text mt-1 mb-0">${item.price}</p>
                  </div>

                  <Link to='/itemDetails' state={item} className="btn btn-primary">Details</Link>

                  {props.user ?
                    (props.user.isAdmin) &&
                    <Link to="/editItem" className="btn btn-warning" state={item}>Edit</Link>
                    : ''
                  }
                  {props.user ?
                    (props.user.isAdmin) &&
                    <button onClick={() => props.handleDeleteItem(item._id)} className="btn btn-danger">Delete</button>
                    : ''
                  }
                </div>
              </div>
            )}
        </div>
        : ''
      }


      {filter === "holiday" ?
        <div className="row">
          {props.items
            .filter(item => item.type === 'tumblers')
            .filter(item => item.subcat === 'holiday')
            .map(item =>
              <div key={item._id} className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    {item.imageUrl ?
                      <img src={item.imageUrl} className="card-img-bottom" alt=''></img>
                      : ''
                    }
                    {item.videoUrl ?
                      <video className='card-img-top' autoplay='true'>
                        <source src={item.videoUrl} type="video/mp4" />
                      </video>
                      : ''
                    }
                    <p className="card-text mt-1 mb-0">${item.price}</p>
                  </div>

                  <Link to='/itemDetails' state={item} className="btn btn-primary">Details</Link>

                  {props.user ?
                    (props.user.isAdmin) &&
                    <Link to="/editItem" className="btn btn-warning" state={item}>Edit</Link>
                    : ''
                  }
                  {props.user ?
                    (props.user.isAdmin) &&
                    <button onClick={() => props.handleDeleteItem(item._id)} className="btn btn-danger">Delete</button>
                    : ''
                  }
                </div>
              </div>
            )}
        </div>
        : ''
      }
      {filter === "mom" ?
        <div className="row">
          {props.items
            .filter(item => item.type === 'tumblers')
            .filter(item => item.subcat === 'mom')
            .map(item =>
              <div key={item._id} className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    {item.imageUrl ?
                      <img src={item.imageUrl} className="card-img-bottom" alt=''></img>
                      : ''
                    }
                    {item.videoUrl ?
                      <video className='card-img-top' autoplay='true'>
                        <source src={item.videoUrl} type="video/mp4" />
                      </video>
                      : ''
                    }
                    <p className="card-text mt-1 mb-0">${item.price}</p>
                  </div>

                  <Link to='/itemDetails' state={item} className="btn btn-primary">Details</Link>

                  {props.user ?
                    (props.user.isAdmin) &&
                    <Link to="/editItem" className="btn btn-warning" state={item}>Edit</Link>
                    : ''
                  }
                  {props.user ?
                    (props.user.isAdmin) &&
                    <button onClick={() => props.handleDeleteItem(item._id)} className="btn btn-danger">Delete</button>
                    : ''
                  }
                </div>
              </div>
            )}
        </div>
        : ''
      }
      {filter === "baby" ?
        <div className="row">
          {props.items
            .filter(item => item.type === 'tumblers')
            .filter(item => item.subcat === 'baby')
            .map(item =>
              <div key={item._id} className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    {item.imageUrl ?
                      <img src={item.imageUrl} className="card-img-bottom" alt=''></img>
                      : ''
                    }
                    {item.videoUrl ?
                      <video className='card-img-top' autoplay='true'>
                        <source src={item.videoUrl} type="video/mp4" />
                      </video>
                      : ''
                    }
                    <p className="card-text mt-1 mb-0">${item.price}</p>
                  </div>

                  <Link to='/itemDetails' state={item} className="btn btn-primary">Details</Link>

                  {props.user ?
                    (props.user.isAdmin) &&
                    <Link to="/editItem" className="btn btn-warning" state={item}>Edit</Link>
                    : ''
                  }
                  {props.user ?
                    (props.user.isAdmin) &&
                    <button onClick={() => props.handleDeleteItem(item._id)} className="btn btn-danger">Delete</button>
                    : ''
                  }
                </div>
              </div>
            )}
        </div>
        : ''
      }
      {filter === "sports" ?
        <div className="row">
          {props.items
            .filter(item => item.type === 'tumblers')
            .filter(item => item.subcat === 'sports')
            .map(item =>
              <div key={item._id} className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    {item.imageUrl ?
                      <img src={item.imageUrl} className="card-img-bottom" alt=''></img>
                      : ''
                    }
                    {item.videoUrl ?
                      <video className='card-img-top' autoplay='true'>
                        <source src={item.videoUrl} type="video/mp4" />
                      </video>
                      : ''
                    }
                    <p className="card-text mt-1 mb-0">${item.price}</p>
                  </div>

                  <Link to='/itemDetails' state={item} className="btn btn-primary">Details</Link>

                  {props.user ?
                    (props.user.isAdmin) &&
                    <Link to="/editItem" className="btn btn-warning" state={item}>Edit</Link>
                    : ''
                  }
                  {props.user ?
                    (props.user.isAdmin) &&
                    <button onClick={() => props.handleDeleteItem(item._id)} className="btn btn-danger">Delete</button>
                    : ''
                  }
                </div>
              </div>
            )}
        </div>
        : ''
      }
      {filter === "movies_shows" ?
        <div className="row">
          {props.items
            .filter(item => item.type === 'tumblers')
            .filter(item => item.subcat === 'movies_shows')
            .map(item =>
              <div key={item._id} className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    {item.imageUrl ?
                      <img src={item.imageUrl} className="card-img-bottom" alt=''></img>
                      : ''
                    }
                    {item.videoUrl ?
                      <video className='card-img-top' autoplay='true'>
                        <source src={item.videoUrl} type="video/mp4" />
                      </video>
                      : ''
                    }
                    <p className="card-text mt-1 mb-0">${item.price}</p>
                  </div>

                  <Link to='/itemDetails' state={item} className="btn btn-primary">Details</Link>

                  {props.user ?
                    (props.user.isAdmin) &&
                    <Link to="/editItem" className="btn btn-warning" state={item}>Edit</Link>
                    : ''
                  }
                  {props.user ?
                    (props.user.isAdmin) &&
                    <button onClick={() => props.handleDeleteItem(item._id)} className="btn btn-danger">Delete</button>
                    : ''
                  }
                </div>
              </div>
            )}
        </div>
        : ''
      }
      {filter === "custom_order" ?
        <div className="row">
          {props.items
            .filter(item => item.type === 'tumblers')
            .filter(item => item.subcat === 'custom_order')
            .map(item =>
              <div key={item._id} className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    {item.imageUrl ?
                      <img src={item.imageUrl} className="card-img-bottom" alt=''></img>
                      : ''
                    }
                    {item.videoUrl ?
                      <video className='card-img-top' autoplay='true'>
                        <source src={item.videoUrl} type="video/mp4" />
                      </video>
                      : ''
                    }
                    <p className="card-text mt-1 mb-0">${item.price}</p>
                  </div>

                  <Link to='/itemDetails' state={item} className="btn btn-primary">Details</Link>

                  {props.user ?
                    (props.user.isAdmin) &&
                    <Link to="/editItem" className="btn btn-warning" state={item}>Edit</Link>
                    : ''
                  }
                  {props.user ?
                    (props.user.isAdmin) &&
                    <button onClick={() => props.handleDeleteItem(item._id)} className="btn btn-danger">Delete</button>
                    : ''
                  }
                </div>
              </div>
            )}
        </div>
        : ''
      }
    </main>

  );
}

export default Tumblers;