import React from 'react'
import { Header, About, Services, CTA, Courses} from 'components'

const Home = () => {
  return (
    <main className=''>
      <Header />      
      <About />
      <Courses />
      <Services />
      <CTA />
    </main>
  )
}

export default Home
