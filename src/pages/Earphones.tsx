import React from 'react'
import Menu from '../components/Menu'


const Earphones = () => {
  return (
    <>
      <div className='head'>
        <h2>EARPHONES</h2>
      </div>
      <div className="earphones">
        <div className='earphones_imageOne'/>
        <div className="earphones_detail">
          <p className='overline'>NEW PRODUCT</p>
          <h2>YX1 WIRELESS EARPHONES</h2>
          <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
          <button className='buttonOne'>SEE PRODUCT</button>
        </div>
      </div>

      <Menu />
    </>
  )
}

export default Earphones
