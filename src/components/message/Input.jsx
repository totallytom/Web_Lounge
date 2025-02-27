import React from 'react'  

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder="Type something..."/>
      <div className="send">
        <img src="" alt="" />
        <input type="file" style={{ display: "none" }} id="file"/>
        <lable htmlFor="file"> 
          <img src="" alt="" />
        </lable>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
