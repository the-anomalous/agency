import React from 'react'
import { NavLink } from 'react-router-dom'
import './navlinks.style.scss'

const NavLinks = ({light}) => {
  return (
    <>
      <li className='links'>
        <NavLink to='/services' className={`link ${light && 'light'}`}>
          services
        </NavLink>
      </li>
      <li className='links'>
        <NavLink to={'/about-us'} className={`link ${light && 'light'}`}>
          about us
        </NavLink>
      </li>
      <li className='links'>
        <NavLink to={'/contact'} className={`link ${light && 'light'}`}>
          contact
        </NavLink>
      </li>
      <li className='links'>
        <NavLink to={'/courses'} className={`link ${light && 'light'}`}>
          courses
        </NavLink>
      </li>
    </>
  )
}

export default NavLinks
