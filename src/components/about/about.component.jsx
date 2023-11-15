import React from 'react'
import {Heading2, SecondaryBtn} from 'components'
import TeamBig from 'assets/team-big.svg'
import './about.styles.scss'

const About = () => {
  return (
    <section className='about section_red'>
     <img src={TeamBig} alt="team" className='about_img' /> 
      <Heading2 
        primary={'who we are...'}
        secondary={'about us'}
      />
      <div className='about_info'>
        <p className='about_text'>
          We are a creative agency fueling brand innovation and realizing unprecedented digital success. With a focus on visibility and impact, to deliver world-class digital products. 
        </p>

        <SecondaryBtn to={'/about-us'} name={'meet our team'} />
      </div>
    </section>
  )
}

export default About
