import React from 'react'
import {Heading2, PrimaryBtn} from 'components'
import './about.styles.scss'

const About = () => {
  return (
    <section className='about section'>
      <Heading2 
        primary={'who we are...'}
        secondary={'about us'}
      />
      <div className='about_info'>
        <p className='about_text'>
          We are a creative agency fueling brand innovation and realizing unprecedented digital success. With a focus on visibility and impact, to deliver world-class digital products. 
        </p>

        <PrimaryBtn to={'/about-us'} name={'know more'} />
      </div>
    </section>
  )
}

export default About
