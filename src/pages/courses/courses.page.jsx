import React from 'react'
import { Heading2, CourseCard, Experince, HeaderConatiner, CTA } from 'components'
import data from 'assets/courses'
import './courses.style.scss'

const Courses = () => {
  return (
    <main className=''>
      {data.intro.map((data, index) => {
        return <HeaderConatiner data={data} key={`coursees${index}`} course />
      })}
      <section className='course_page section_page'>
        <Heading2 primary={'grow with us'} secondary={'courses'} />
        <div className='courses_details'>
          <div className='courses_cards'>
            {data.courses.map(({ name, img, info, color }, index) => {
              return (
                <CourseCard
                  color={color}
                  name={name}
                  img={img}
                  info={info}
                  key={`coursepage${index}`}
                />
              )
            })}
          </div>
        </div>
      </section>
      <Experince />
      <CTA />
    </main>
  )
}

export default Courses
