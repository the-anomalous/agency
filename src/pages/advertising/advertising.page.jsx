import React from 'react'
import {Heading2} from 'components'
import data from 'assets/adverting'
import './advertising.styles.scss'

const Advertising = () => {
  return (
    <main className='advertising section'>
      <Heading2 primary={'advertising'} secondary={'our services'} /> 
      {data.map((data, index) => {
        return (
          <div key={`advertising${index}`} className="advertising_point">
            <div className="advertising_point-content">
              <h4 className='advertising_point-heading'>{data.heading1} <br /> {data.heading2}</h4>
              <p className="advertising_point-text">{data.content}</p>
            </div>
            <div className="advertising_point-img">
              <img src={data.gif} alt="" />
            </div>
          </div>
        ) 
      })}
    </main>
  )
}

export default Advertising
