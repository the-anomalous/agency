import React from 'react'
import {Heading2, Conatiner} from 'components'
import data from './advertising.js'
import './advertising.styles.scss'
import Container from 'components/container/container.component.jsx'

const Advertising = () => {
  return (
    <main className='advertising section'>
      <Heading2 primary={'advertising'} secondary={'our services'} /> 
      {data.map((data, index) => {
        return (
          <Container data={data} key={`advertising${index}`} />
        ) 
      })}
    </main>
  )
}

export default Advertising
