import React from 'react'
import {Team, HeaderConatiner } from 'components'
import data from './about'
import './about.styles.scss'

const About = () => {
  return (
    <main className=''>
      <HeaderConatiner data={data.header} />
      <Team data={data.team} />
    </main>
  )
}

export default About
