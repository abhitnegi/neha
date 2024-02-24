import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sure = () => {
    const navigate = useNavigate()
    const yesMove = () => {
        navigate('/last')
    }
    const noMove = () => {
        alert("Sorry, option not avialable")
        navigate('/sure')
    }
  return (
    <div className='home'>
      <h1>Are You Sure?</h1>
      <div className="buttons">
         <button onClick={yesMove}>Yes</button>
        <button onClick={noMove}>No</button>
      </div>
    </div>
  )
}

export default Sure
