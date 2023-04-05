import React from 'react'
import Logo from './blogger-logo.jpg'
import { Link } from 'react-router-dom'

const Footer = ()=> {
  return (
    <footer>
      <Link to='/'>
      <img src={ Logo } alt='blog-logo'/>
      </Link>
      <span>
        Made with React.js
      </span>
    </footer>
  )
}

export default Footer