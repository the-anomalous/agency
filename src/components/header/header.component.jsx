import React from 'react'
import './header.styles.scss'
import {SecondaryBtn} from 'components'

const Header = () => {
  return (
    <header className='header'>
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
    </header>
  )
}

export default Header
