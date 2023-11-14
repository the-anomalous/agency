import React from 'react'
import {Heading2, CourseCard} from 'components'
import data from 'assets/data'

const Courses = () => {
  return (
    <> 
      <section className="course_page section">
        <Heading2 primary={'grow with us'} secondary={'courses'} />
      <div className="courses_details">
        <div className='courses_cards'>
          {data.courses.map(({ name, img, info }) => {
            return <CourseCard name={name} img={img} info={info} />
          })}
        </div>
      </div>
      </section>
    </>
  )
}

export default Courses
