import * as React from 'react';
import { NavLink} from "react-router-dom";
import ToggleMenu from './ToggleMenu';



const Navbar = () => {
  const [visible, toggleVisible] = React.useState(false)
  
  return (
    <>
      <header className="nav">
        <div onClick={()=> toggleVisible(!visible)} id='Hamburger'>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <NavLink className="nav-link" to={`/`}>
          <img className="nav-logo" src={require('../assets/shared/desktop/logo.svg')} />
        </NavLink>
        <div className="nav-menu">
          <NavLink to={`/`}>HOME</NavLink>
          <NavLink to={`/headphones`}>HEADPHONES</NavLink>
          <NavLink to={`/speakers`}>SPEAKERS</NavLink>
          <NavLink to={`/earphones`}>EARPHONES</NavLink>
        </div>
        <NavLink to={`/payment`}>
          <img className="nav-cart" src={require('../assets/shared/desktop/icon-cart.svg')} />
        </NavLink>

      </header>
        {visible && <ToggleMenu />}
    </>
  )
}

export default Navbar
