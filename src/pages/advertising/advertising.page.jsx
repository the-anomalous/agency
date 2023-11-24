import React from 'react'
import { Container, HeaderConatiner, CTA } from 'components'
import data from './advertising.js'
import './advertising.styles.scss'

const Advertising = () => {
  return (
    <main className='advertising'>
      <HeaderConatiner data={data.header} />
      <section className='section'>
        {data.content.map((data, index) => {
          return <Container data={data} key={`advertising${index}`} />
        })}
      </section>
      <CTA />
    </main>
  )
}

export default Advertising
