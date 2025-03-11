import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom'

function Hero() {

  const navigate = useNavigate()
  return (
    <div className='hero'>

        <div className="hero-box">
                <h1>Best Jewelry Here !</h1>
                <article>Discover timeless elegance, crafted perfection, and unparalleled luxury in every piece, designed to make you shine</article>
                <button onClick={()=>navigate('/all-product')}>Shop Now</button>
        </div>
       
    </div>
  )
}

export default Hero
