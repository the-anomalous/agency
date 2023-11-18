import React from 'react'
import { NavLink } from 'react-router-dom'
import './cta-btn.styles.scss'

const CTABtn = ({ name, to, children }) => {
  return (
      <NavLink to={to}>
      <div className='cta-btn'>
        {name}
        {children}
      </div>
      </NavLink>
  )
}

export default CTABtn
