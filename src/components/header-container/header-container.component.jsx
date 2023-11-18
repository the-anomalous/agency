import React from 'react'
import {Heading2} from 'components'
import './header-container.styles.scss'

const HeaderContainer = ({data, course}) => {
  return (
    <header className='section_page header_container'>
      <div className='header_container_wrapper'>
        <Heading2 primary={data.headingPri} secondary={data.headingSec} />
        <div className='header_container_wrapper-img'>
          <img src={data.img} alt='' />
        </div>
        <ul className={`header_container-text ${course && 'course_page_text'}`}>
          {data.content.map((text, index) => {
           return (
              <li className={course && 'course_page-point'} key={`coursepoint${index}`}>
                {text} 
              </li>)
          })}
        </ul>
      </div>
      <div className='header_container-img'>
        <img src={data.img} alt='' />
      </div>
    </header>
  )
}

export default HeaderContainer
