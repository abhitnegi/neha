import React from 'react'
import { useNavigate } from 'react-router-dom'

const Final = () => {
    const navigate = useNavigate()
    const move = () => {
        navigate('/sure')
    }
  return (
    <div className='home'>
      <h1>You Want To Know The Correct Answers ?</h1>
      <h2>Click On The Button Below!</h2>
      <button onClick={move}>Click Me</button>
    </div>
  )
}

export default Final
