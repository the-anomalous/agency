import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './menu.styles.scss'

const SocialLink = ({to, icon}) => {
  return (
    <a href={to} className='social__link' >
      <i className={`fa-brands ${icon}`} style={{ color: '#000111' }}></i>
    </a>
  )
}

const Menu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <div className='menu'>
      <div className='menu__btn' onClick={() => setIsMenuActive(!isMenuActive)}>
        <figure
          className={`menu__open ${isMenuActive && 'menu__open--active'} `}
        >
          <span
            className='material-symbols-outlined'
            style={{ fontSize: 'inherit' }}
          >
            menu
          </span>
        </figure>

        <figure
          className={`menu__close ${isMenuActive && 'menu__close--active'} `}
        >
          <span
            class='material-symbols-outlined'
            style={{ fontSize: 'inherit' }}
          >
            close
          </span>
        </figure>
      </div>

      <div
        className={`menu__background ${
          isMenuActive && 'menu__background--active'
        } `}
      ></div>

      <div className={`menu__bar ${isMenuActive && 'menu__bar--active'}`}>
        <ul className='menu__items'>
          <li
            className={`menu__link menu__link--about ${
              isMenuActive && 'menu__link--active'
            }`}
          >
            <NavLink
              className='link'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              Services
            </NavLink>
          </li>
          <div
            className={`menu__dropdown ${
              toggleDropdown && 'menu__dropdown-active'
            }`}
          >
            <li
              className={`menu__dropdown-link ${
                isMenuActive && 'menu__link--active'
              }`}
            >
              <NavLink
                to={'/digital-marketing'}
                className='link'
                onClick={() => {
                  setIsMenuActive(!isMenuActive)
                  setToggleDropdown(!toggleDropdown)
                }}
              >
                digital marketing
              </NavLink>
            </li>
            <li
              className={`menu__dropdown-link ${
                isMenuActive && 'menu__link--active'
              }`}
            >
              <NavLink
                to={'/advertising'}
                className='link'
                onClick={() => {
                  setIsMenuActive(!isMenuActive)
                  setToggleDropdown(!toggleDropdown)
                }}
              >
                Advertising
              </NavLink>
            </li>
            <li
              className={`menu__dropdown-link ${
                isMenuActive && 'menu__link--active'
              }`}
            >
              <NavLink
                to={'/election-campaign'}
                className='link'
                onClick={() => {
                  setIsMenuActive(!isMenuActive)
                  setToggleDropdown(!toggleDropdown)
                }}
              >
                election campaign
              </NavLink>
            </li>
          </div>
          <li
            className={`menu__link menu__link--projects ${
              isMenuActive && 'menu__link--active'
            }`}
          >
            <NavLink
              to={'/about-us'}
              className='link'
                onClick={() => {
                  setIsMenuActive(!isMenuActive)
                  setToggleDropdown(false)
                }}
            >
              about us
            </NavLink>
          </li>
          <li
            className={`menu__link menu__link--contact ${
              isMenuActive && 'menu__link--active'
            }`}
          >
            <NavLink
              to={'/contact'}
              className='link'
                onClick={() => {
                  setIsMenuActive(!isMenuActive)
                  setToggleDropdown(false)
                }}
            >
              Contact
            </NavLink>
          </li>
          <li
            className={`menu__link menu__link--resume ${
              isMenuActive && 'menu__link--active'
            }`}
          >
            <NavLink
              to={'/courses'}
              className='link'
                onClick={() => {
                  setIsMenuActive(!isMenuActive)
                  setToggleDropdown(false)
                }}
            >
              courses
            </NavLink>
          </li>
        </ul>
        <div className='menu__contact'>
          <div className="menu__social">
            <SocialLink to={''} icon={'fa-youtube'} />
            <SocialLink to={''} icon={'fa-instagram'} />
            <SocialLink to={''} icon={'fa-linkedin'} />
            <SocialLink to={''} icon={'fa-twitter'} />
          </div>
          <p className='menu__email'>adityamusale4477@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Menu
