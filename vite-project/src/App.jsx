import React from 'react'
import Card from './component/card';
const App = () => {
  return (
    <>
    <Card />
      <div className="container">
        <div className="top">
          <div className="imga">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dtcq5klW-6LQTvkbrtGbP3rgxFm825rrGHClUf14qdWFcceW1BoyAZI&s"></img>
          </div>
          <div className='save'>
          <h3>Save <span><Bookmark size={22} color="fafafa"  strokeWidth={1.25}/></span> </h3>
          </div>
        </div>
        <div className="mid">
          <h3>Amazon <span>5 days ago</span></h3>
          <h1>Senior UI/UX Designer</h1>
          <div className="title">
            <p>Part-Time</p>
            <p>Senior Level</p>
          </div>
        </div>
        <div className="bottom">
          <div className="price">
            <h3>$120/hr</h3>
            <p>Mumbai,india</p>
          </div>
          <div className="button">
            <button>Apply now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


