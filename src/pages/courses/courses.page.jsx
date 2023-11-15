import React from 'react'
import {Heading2, CourseCard} from 'components'
import data from 'assets/data'

const Courses = () => {
  return (
    <main className='layout'> 
      <section className="course_page section">
        <Heading2 primary={'grow with us'} secondary={'courses'} />
      <div className="courses_details">
        <div className='courses_cards'>
          {data.courses.map(({ name, img, info }, index) => {
            return <CourseCard name={name} img={img} info={info} index={index} />
          })}
        </div>
      </div>
      </section>
    </main>
  )
}

export default Courses
