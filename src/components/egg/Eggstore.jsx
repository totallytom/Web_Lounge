import React from 'react'
import "./eggstore.scss"
import Eggpost from "../eggpost/Eggpost"

const Eggstore = () => {
  return (
  <div className ="egg">
    <div className = "headline">
       <h1>Egg</h1>
    </div>
    <div className = "search">
      <input type= "text" placeholder="Search..."/>
    </div>
    <div className = "news">
      <h1>Your Followers</h1>
      <Eggpost/>
    </div>
    <div className = "news">
      <h1>Genres</h1>
    </div>
  </div>
    
  )
}


export default Eggstore
  