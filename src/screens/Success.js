import React from 'react'
import CheckMark from "../images/checkmark.png";

const Success = () => {
  return (
    <div className='success-page'>
        <img src={CheckMark} alt="success"/>
        <h1>Your payment was successful</h1>
        <p>Order is on the way!</p>
    </div>
  )
}

export default Success