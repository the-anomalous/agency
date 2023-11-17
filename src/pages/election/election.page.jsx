import React from 'react'
import {Container, HeaderConatiner} from 'components'
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
    </main>
  )
}

export default Election
