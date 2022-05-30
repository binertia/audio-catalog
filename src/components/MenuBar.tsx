import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (
    <div className="menu">
      <div className="menu_wrap">
        <img className="img-menu" src={require('../assets/shared/desktop/image-category-thumbnail-headphones.png')}/>
        <h6>HEADPHONES</h6>
        <Link to={'/headphones'}>SHOP</Link>
      </div>
      <div className="menu_wrap">
        <img className="img-menu" src={require('../assets/shared/desktop/image-category-thumbnail-speakers.png')}/>
        <h6>SPEAKERS</h6>
        <Link to={'/speakers'}>SHOP</Link>
      </div>
      <div className="menu_wrap">
      <img className="img-menu" src={require('../assets/shared/desktop/image-category-thumbnail-earphones.png')}/>
        <h6>EARPHONES</h6>
        <Link to={'/earphones'}>SHOP</Link>
      </div>
    </div>
  )
}

export default MenuBar
