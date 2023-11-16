import React from 'react'
import './container.styles.scss'

const Container = ({data}) => { 
  return (
    <div className='container_point'>
      <div className='container_point-content'>
        <h4 className='container_point-heading'>
          {data.heading1} <br /> {data.heading2}
        </h4>
        <p className='container_point-text'>{data.content}</p>
      </div>
      <div className='container_point-img'>
        <img src={data.img} alt='' />
      </div>
    </div>
  )
}

export default Container
