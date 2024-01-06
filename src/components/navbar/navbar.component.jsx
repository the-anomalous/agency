import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, CTABtn } from 'components'
import './navbar.styles.scss'

const Navbar = () => {
  const [toggleDropdown, setToogleDropdown] = useState(false)

  return (
    <nav className='nav'>
      <NavLink to='/'>
        <img src={"https://ik.imagekit.io/qrw1xgcj7/adryothub-media/img/logobg.png?updatedAt=1704554734832"} alt='Logo' className='nav_logo' />
      </NavLink>
      <ul className='nav_links'>
        <li className='links nav_links-link'>
          <NavLink to={'/about-us'} className={`link`}>
            about us
          </NavLink>
        </li>
        <li
          onClick={() => setToogleDropdown(!toggleDropdown)}
          className='links  nav_links-link'
          style={{ display: 'flex' }}
        >
          <NavLink className={`link`}>services</NavLink>
          <span className='material-symbols-outlined'>keyboard_arrow_down</span>
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
