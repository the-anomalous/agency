import React from 'react'
import { Container, HeaderConatiner} from 'components'
import data from './marketing.js'
import './marketing.styles.scss'

const Marketing = () => {
  return (
    <main className='marketing'>
      <HeaderConatiner data={data.header} />
      <section className='section'>
        {data.content.map((data, index) => {
          return (
            <Container key={`marketing${index}`} data={data} index={index} />
          )
        })}
      </section>
    </main>
  )
}

export default Marketing
