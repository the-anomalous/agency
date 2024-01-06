import React from 'react'
import { Heading2, CTABtn } from 'components'
import './cta.styles.scss'

const CTA = () => {
  return (
    <section className='cta section'>
      <Heading2 secondary={'excited?'} />
      <div className='cta_content'>
        <div className='cta_text'>
          <p>tell us about your new project, Let's Bring Your Vision to Life</p>
          <CTABtn name={'talk to us'} to={'/contact'} />
        </div>
        <div className='cta_img'>
          <img
            src="https://ik.imagekit.io/qrw1xgcj7/adryothub-media/img/cta_auto_x2.png?updatedAt=1704551932521"
            alt='cta img'
          />
        </div>
      </div>
    </section>
  )
}

export default CTA
