import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <div className='container'>
      <div className='feature_one'>
        <div className='text-container'>
          <h1>ZX9 SPEAKER</h1>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Link to="/">
            <button className='buttonTwo'>See Product</button>
          </Link>
        </div>
      </div>
      <div className='feature_two'>
        <div className="text-container_two">
          <h3>ZX7 SPEAKER</h3>
          <Link to="/">
            <button className='buttonTwo'>
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-container">
        <div className='feature_three' />
        <div className='feature_four'>
          <div>
            <h3>YX1 EARPHONES</h3>
            <Link to="/">
              <button className='buttonTwo'>
                SEE PRODUCT
              </button>
            </Link>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Content
