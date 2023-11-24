import React from 'react'
import {Team, HeaderConatiner, CTA} from 'components'
import data from './about'
import './about.styles.scss'

const About = () => {
  return (
    <main className=''>
      <HeaderConatiner data={data.header} />
      <Team data={data.team} />
      <CTA />
    </main>
  )
}

export default About
