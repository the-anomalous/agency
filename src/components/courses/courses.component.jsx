import React from 'react'
import { CourseCard, Heading2, PrimaryBtn } from 'components'
import './courses.styles.scss'
import data from 'assets/data'

const Courses = () => {
  return (
    <section className='courses section'>
      <Heading2 primary={'grow with us'} secondary={'courses'} />
      <div className="courses_details">
        <div className='courses_cards'>
          {data.courses.map(({ name, color, img, info }, index) => {
            if (index > 2) {return}
            return <CourseCard color={color} name={name} img={img} info={info} index={index}/>
          })}
        </div>
        <PrimaryBtn to={'/courses'} name={'explore all courses'} />
      </div>

    </section>
  )
}

export default Courses
