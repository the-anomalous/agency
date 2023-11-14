import React from 'react'
import './experince.styles.scss'
import data from 'assets/experince'
import { Heading2 } from 'components'

const Experince = () => {
  return (
    <section className='experince section'>
      <Heading2 primary={'Our experince'} secondary={'why adroyt'} />
      <p className='experince_intro'>{data.intro}</p>
      <div className='experince_points_wrapper'>
        {data.points.map((data, index) => {
          return (
            <div className='experince_point'>
              <div className='experince_h3'>
                <span className="experince_point-num">{`0${index+1}`}</span>
                <h3 className='experince_h3-name'>{data.name}</h3>
              </div>
              <p className='experince_content'>{data.content}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experince
