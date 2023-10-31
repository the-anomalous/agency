import React from 'react'
import './header.styles.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='header_img'>
        <h1 className='header_tagline'>
          <span className='secondary'>
            Be Seen. Be Heard. Be Known.
          </span>
          <div className='primary'>
            Inspiring Brands <br />
            Realizing the <span>Unimagined</span>
          </div>
        </h1>
        <NavLink to='/contact' className='header_cta'>
          let's talk
          <span class='material-symbols-outlined'>
            arrow_right_alt
          </span> 
        </NavLink>
      </div>
    </header>
  )
}

export default Header
