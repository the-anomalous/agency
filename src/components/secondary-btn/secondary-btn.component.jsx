import React from 'react'
import './secondary-btn.styles.scss'
import { NavLink } from 'react-router-dom'

const SecodaryBtn = ({ to, name, icon, light, className }) => {
  return (
    <div className={`sec_btn ${className} ${light && 'light'}`}>
      <NavLink className='sec_btn-link' to={to}>
        {name}
        {icon && (
          <span className='material-symbols-outlined sec_btn-icon'>{icon}</span>
        )}
      </NavLink>
    </div>
  )
}

export default SecodaryBtn
