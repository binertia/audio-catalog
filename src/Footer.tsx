/* eslint-disable react/no-unescaped-entities */ //for ignore parameter
import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer'>
      <span className='orange-line'/>
      <Link to={`/`}>
        <img className="footer-logo" src={require('../assets/shared/desktop/logo.svg')} />
      </Link>
      <div className="footer-menu">
        <Link to={`/`}>HOME</Link>
        <Link to={`/headphones`}>HEADPHONES</Link>
        <Link to={`/speakers`}>SPEAKERS</Link>
        <Link to={`/earphones`}>EARPHONES</Link>
      </div>
      <p className='about'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
      <p className='copyright'>&copy;Copyright 2021. All Rights Reserved</p>
      <div className='social'>
        <a href='https://www.facebook.com/'>
          <img src={require('../assets/shared/desktop/icon-facebook.svg')} alt="" />
        </a>
        <a href='https://twitter.com/i/flow/login'>
          <img src={require('../assets/shared/desktop/icon-twitter.svg')} alt="" />
        </a>
        <a href='https://www.instagram.com/accounts/login/'>
          <img src={require('../assets/shared/desktop/icon-instagram.svg')} alt="" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
