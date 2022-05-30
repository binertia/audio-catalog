import React from 'react'
import Menu from '../components/Menu'

const Speakers = () => {
  return (
    <>
      <div className="head">
        <h2>Speakers</h2>
      </div>
      <div className="speakers">
        <div className='speakers_imageOne'/>
        <div className="speakers_detail">
          <p className='overline'>NEW PRODUCT</p>
          <h2>ZX9 SPEAKER</h2>
          <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
          <button className='buttonOne'>SEE PRODUCT</button>
        </div>
      </div>
      <div className="speakers">
        <div className="speakers_detail">
          <h2>ZX7 SPEAKER</h2>
          <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
          <button className='buttonOne'>SEE PRODUCT</button>
        </div>
        <div className="speakers_imageTwo"/>
      </div>

      <Menu />
    </>
  )
}

export default Speakers
