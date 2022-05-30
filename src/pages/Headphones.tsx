import React from 'react'
import Menu from '../components/Menu'

const Headphones = () => {
  return (
    <>
      <div className='head'>
        <h2>HEADPHONES</h2>
      </div>
      <div className="headphones">
        <div className='headphones_imageOne'/>
        <div className="headphones_detail">
          <p className='overline'>NEW PRODUCT</p>
          <h2>XX99 Mark II Headphones</h2>
          <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <button className='buttonOne'>SEE PRODUCT</button>
        </div>
      </div>
      <div className="headphones">
        <div className="headphones_detail">
          <h2>XX99 Mark I Headphones</h2>
          <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
          <button className='buttonOne'>SEE PRODUCT</button>
        </div>
        <div className="headphones_imageTwo"/>
      </div>
      <div className="headphones">
        <div className="headphones_imageThree"/>
        <div className="headphones_detail">
          <h2>XX59 Headphones</h2>
          <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
          <button className='buttonOne'>SEE PRODUCT</button>
        </div>
      </div>
      <Menu/>
    </>
  )
}

export default Headphones
