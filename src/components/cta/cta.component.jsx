import React from 'react'
import { Heading2, PrimaryBtn } from 'components'
import './cta.styles.scss'

const CTA = () => {
  return (
    <section className='cta section'>
      <div className='cta_text'>
        <Heading2
          primary={
            "tell us about your new project, Let's Bring Your Vision to Life"
          }
          secondary={'excited?'}
        />
        <PrimaryBtn to={'/contact'} name={'take a leap'} /> 
      </div>
      <div className='cta_img'>
        <img src={'https://adchitects.co/_next/image?url=%2Fimages%2Fhomepage%2Fhome1.png&w=256&q=75'} alt='' className='cta_img-1' />
        <img src={'https://adchitects.co/_next/image?url=%2Fimages%2Fhomepage%2Fhome2.png&w=256&q=75'} alt='' className='cta_img-2' />
        <img src={'https://adchitects.co/_next/image?url=%2Fimages%2Fhomepage%2Fhome3.png&w=384&q=75'} alt='' className='cta_img-3' />
      </div>
    </section>
  )
}

export default CTA
