import React from 'react'
import './course-card.styles.scss'
import {SecondaryBtn} from 'components'

const CourseCard = ({ name, img, info }) => {
  return (
    <section className='course_card' key={name}>
      <div className='course_card-img'>
        <img src={img} alt='card img' />
      </div>
      <div className='course_card-info'>
        <h3 className='course_card-name' >{name}</h3>
        <p>{info}</p>
        <SecondaryBtn to={'/courses'} name={'start learning'}/>
      </div>
    </section>
  )
}

export default CourseCard
