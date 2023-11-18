import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, CTABtn } from 'components'
import Logo from 'assets/logobg.png'
import './navbar.styles.scss'

const Navbar = () => {
  const [toggleDropdown, setToogleDropdown] = useState(false)

  return (
    <nav className='nav'>
      <NavLink to='/'>
        <img src={Logo} alt='Logo' className='nav_logo' />
      </NavLink>
      <ul className='nav_links'>
        <li className='links nav_links-link'>
          <NavLink to={'/about-us'} className={`link`}>
            about us
          </NavLink>
        </li>
        <li className='links  nav_links-link'>
          <NavLink
            onClick={() => setToogleDropdown(!toggleDropdown)}
            className={`link`}
          >
            services
          </NavLink>
          <span class='material-symbols-outlined'>keyboard_arrow_down</span>
        </li>
        <li className='links  nav_links-link'>
          <NavLink to={'/courses'} className={`link`}>
            courses
          </NavLink>
        </li>
        <CTABtn name={'contact'} to={'/contact'} />
        <div
          className={`nav_dropdown ${toggleDropdown && 'nav_dropdown-active'}`}
        >
          <ul className='nav_dropdown_links'>
            <NavLink
              className={'nav_dropdown_link'}
              to='/advertising'
              onClick={() => setToogleDropdown(!toggleDropdown)}
            >
              advertising
            </NavLink>
            <NavLink
              className={'nav_dropdown_link'}
              to='/digital-marketing'
              onClick={() => setToogleDropdown(!toggleDropdown)}
            >
              digital marketing
            </NavLink>
            <NavLink
              className={'nav_dropdown_link'}
              to='/election-campaign'
              onClick={() => setToogleDropdown(!toggleDropdown)}
            >
              election campaign
            </NavLink>
          </ul>
        </div>
      </ul>
      <Menu />
    </nav>
  )
}

export default Navbar
