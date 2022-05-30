import React from 'react'
import MenuBar from './Menu'


const ToggleMenu = () => {  
  return (
    <div className='background-toggle'>
      <div className='wrap-menu sticky pop'>
        <MenuBar />
      </div>
    </div>
  )
}

export default ToggleMenu
