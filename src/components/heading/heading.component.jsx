import React from 'react'
import './heading.styles.scss'

const Heading2 = ({primary, secondary, light}) => {
  return (
      <h2 className='heading2'>
        <p 
        className={`heading2-sec ${light && 'light-sec'}`}>{secondary}</p>
        <p className={`heading2-pri ${light && 'light-pri'}`}>{primary}</p>
      </h2>
  )
}

export default Heading2
