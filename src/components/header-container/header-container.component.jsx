import React from 'react'
import {Heading2} from 'components'
import './header-container.styles.scss'

const HeaderContainer = ({data}) => {
  return (
    <header className='section_page header_container'>
      <div className='header_container_wrapper'>
        <Heading2 primary={data.headingPri} secondary={data.headingSec} />
        <div className='header_container_wrapper-img'>
          <img src={data.img} alt='' />
        </div>
        <div className='header_container-text'>
          <p>{data.content}</p>
        </div>
      </div>
      <div className='header_container-img'>
        <img src={data.img} alt='' />
      </div>
    </header>
  )
}

export default HeaderContainer
