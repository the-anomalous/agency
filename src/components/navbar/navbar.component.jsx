import React from 'react'
import { NavLink } from 'react-router-dom'
import { SecondaryBtn, NavLinks, Menu } from 'components'
import Logo from 'assets/logo.svg'
import './navbar.styles.scss'

const Navbar = () => {
  return (
    <nav className='nav'>
      <NavLink to='/'>
        <img src={Logo} alt='Logo' className='nav_logo' />
      </NavLink>
      <ul className='nav_links'>
        <NavLinks />
      </ul>

      <SecondaryBtn name='login' className='login-btn' icon={'login'} />
      <Menu />
    </nav>
  )
}

export default Navbar
