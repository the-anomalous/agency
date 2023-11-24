import React from 'react'
import {Container, HeaderConatiner, CTA} from 'components'
import './election.styles.scss'
import data from './election'

const Election = () => {
  return (
    <main className='advertising'>
      <HeaderConatiner data={data.header} />
      <section className='section'>
        {data.content.map((data, index) => {
          return (
            <Container data={data} key={`election${index}`} />
          ) 
        })}
      </section>
      <CTA />
    </main>
  )
}

export default Election
