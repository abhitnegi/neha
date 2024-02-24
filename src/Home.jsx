import React from 'react'
import picture from './panda.jpg'
import picture1 from './download.jpg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const move = () => {
        alert('Wrong Answer')
        navigate('/about')
    }
  return (
    <div  className='home'>
        <h1>Which One is More Cute?</h1>
      <div className="images">
        <img src={picture} alt="" onClick={move}/>
        <img src={picture1} alt="" onClick={move}/>
      </div>
      
    </div>
  )
}

export default Home
