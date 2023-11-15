import React from 'react'
import { Heading2, PrimaryBtn } from 'components'
import './cta.styles.scss'

const CTA = () => {
  return (
    <section className='cta section'>
      <Heading2
        secondary={'excited?'}
      /> 
      <div className="cta_content">
        <div className='cta_text'>
          <p>tell us about your new project, Let's Bring Your Vision to Life</p>
          <PrimaryBtn to={'/contact'} name={'take a leap'} /> 
        </div>
        <div className="cta_img">
          <img src="https://ik.imagekit.io/ml22hal4lxj/adroyt_images/cta_auto_x2_qUod7KBgg.png?updatedAt=1700030690198" alt="cta img" />
        </div>
      </div>
    </section>
  )
}

export default CTA
