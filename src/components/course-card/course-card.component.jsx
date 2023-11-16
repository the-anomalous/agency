import React from 'react'
import './course-card.styles.scss'
import {SecondaryBtn} from 'components'

const CourseCard = ({name, color, img, info}) => {
  return (
    <section className='course_card' style={{backgroundColor:color}}> 
      <div className='course_card-info'>
        <h3 className='course_card-name' >{name}</h3>
        <p>{info}</p>
      </div>
      <div className='course_card-img'>
        <img src={img} alt='card img' />
      </div>
      {
        // <SecondaryBtn className={'course_card-btn'} to={'/courses'} name={'start learning'}/>
      }
    </section>
  )
}

export default CourseCard
