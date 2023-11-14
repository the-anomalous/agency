import React from 'react'
import { NavLink } from 'react-router-dom'
import './cta-btn.styles.scss'

const CTABtn = ({ name, to, children }) => {
  return (
    <NavLink to={to} className='cta-btn'>
      {name}
      {children}
    </NavLink>
  )
}

export default CTABtn
