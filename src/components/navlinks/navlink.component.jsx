import React from 'react'
import { NavLink } from 'react-router-dom'
import './navlinks.style.scss'

const NavLinks = ({ light }) => {
  return (
    <>
      <li className='links'>
        <NavLink to={'/about-us'} className={`link ${light && 'light'}`}>
          about us
        </NavLink>
      </li>
      <li className='links'>
        <NavLink to='/advertising' className={`link ${light && 'light'}`}>
          advertising
        </NavLink>
      </li>
      <li className='links'>
        <NavLink to='/digital-marketing' className={`link ${light && 'light'}`}>
          digital marketing
        </NavLink>
      </li>
      <li className='links'>
        <NavLink to='/election-campaign' className={`link ${light && 'light'}`}>
          election campaign
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
