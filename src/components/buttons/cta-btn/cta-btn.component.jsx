import React from 'react'
import { NavLink } from 'react-router-dom'
import './cta-btn.styles.scss'

const CTABtn = ({ name, to, children }) => {
  return (
    <div className='cta-btn'>
      <NavLink to={to}>
        {name}
        {children}
      </NavLink>
    </div>
  )
}

export default CTABtn
