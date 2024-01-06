import React from 'react'
import './header.styles.scss'
import {SecondaryBtn} from 'components'

const Header = () => {
  return (
    <header className='header'>
      <div className="header_content">
        <h1 className='header_tagline'>
          <div className='primary'>
            Creative <span className="red">perspective.</span> 
            <br />
            Strategic <span className="red"> execution.</span>
            <div className='secondary'>
              Be Seen. Be Heard. Be Known.
            </div>
          </div>
        </h1>
        <SecondaryBtn className={'header_btn'} icon={'chevron_right'} name={"let's talk"} to={'/contact'} />
      </div>
      <div className="header_img">
        <img src="https://ik.imagekit.io/qrw1xgcj7/adryothub-media/img/hero.gif?updatedAt=1704554320279" alt="hero gif" />
      </div>
    </header>
  )
}

export default Header
