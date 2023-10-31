import React from 'react'
import { Heading2 } from 'components'
import data from 'assets/about'
import './team.styles.scss'

const Team = () => {
  return (
    <section className='team section'>
      <Heading2 primary={'the specialists'} secondary={'meet our team'} />

      <div className='team_members'>
        {data.map(({num, name, position, img}) => {
          return (
            <div className='member' key={num}>
              <img
                src={img}
                alt={`${name}'s image`}
                className='member_img'
              />
              <h4 className='member_name'>{name}</h4>
              <p className='member_position'>{position}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Team
