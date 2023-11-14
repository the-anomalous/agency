import React from 'react'
import { Heading2, Team } from 'components'
import './about.styles.scss'
import aboutImg from 'assets/about.webp'

const About = () => {
  return (
    <main className='layout'>
      <header className='about_page section'>
        <Heading2 
          primary={'we connect brands with people'}
          secondary={'about us'}
        />
        <section className='about_page_intro' >
          <div className="about_page_intro-text">
            <p>
              We believe in producing exceptional brand & web experiences for our clients, without the big-agency bloat. No B-teams or generalists. We love teaming up with ambitious businesses and challenger brands to create work that gets them noticed. Our strength comes from the inside. We provide creative and business solutions created to meet the brand needs.
            </p>
          </div> 
          <div className="about_page_intro-img">
            <div className="about_page_intro-square"></div>
            <div className="about_page_intro-circle">
              <img src={aboutImg} alt="" />
            </div>
          </div>
        </section>
      </header>

      <Team/>
    </main>
  )
}

export default About
