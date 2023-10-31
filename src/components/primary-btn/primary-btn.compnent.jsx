import React from 'react'
import './primary-btn.styles.scss'
import { NavLink } from 'react-router-dom'

const PrimaryBtn = ({name, to}) => {
  return (
    <NavLink to={to} className='primary-btn'>
      {name}
    </NavLink>
  )
}

export default PrimaryBtn
