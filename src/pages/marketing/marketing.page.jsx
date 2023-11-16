import React from 'react'
import {Heading2, Conatiner} from 'components'
import data from './marketing.js'
import './marketing.styles.scss'

const Marketing = () => {
  return (
    <main className='section layout'>
      <Heading2 secondary={'services'} primary={'digital marketing'} />
     {data.map((data, index) => {
        return (
          <Conatiner key={`marketing${index}`} data={data} />
        )
      })}
    </main>
  )
}

export default Marketing
