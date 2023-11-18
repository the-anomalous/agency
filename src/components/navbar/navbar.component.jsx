import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavLinks, Menu, CTABtn } from 'components'
import Logo from 'assets/logobg.png'
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
        <div className="nav_dropdown">
          <ul className="nav_dropdown_links">
            <NavLink to="/advertising">advertising</NavLink>
            <NavLink to="/digital-marketing">digital marketing</NavLink>
            <NavLink to="/election-campaign">election campaign</NavLink>
          </ul>
        </div>
      </ul>
      <Menu />
    </nav>
  )
}

export default Navbar
