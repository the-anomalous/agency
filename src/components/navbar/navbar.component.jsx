import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavLinks, Menu, CTABtn } from 'components'
import Logo from 'assets/logo.png'
import './navbar.styles.scss'

const Navbar = () => {
  return (
    <nav className='nav'>
      <NavLink to='/'>
        <img src={Logo} alt='Logo' className='nav_logo' />
      </NavLink>
      <ul className='nav_links'>
        <NavLinks />
        <CTABtn name={'contact'} to={'/contact'} />
      </ul>
      <Menu />
    </nav>
  )
}

export default Navbar
