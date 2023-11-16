import React from 'react'
import { Header, About, Services, CTA, Courses, Experince } from 'components'

const Home = () => {
  return (
    <main className='layout'>
      <Header />      
      <About />
      <Courses />
      <Services />
      {// <Experince /> 
      }
      <CTA />
    </main>
  )
}

export default Home
