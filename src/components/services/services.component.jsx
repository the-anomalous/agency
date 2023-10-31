import React, { useState } from 'react'
import data from 'assets/data'
import { Heading2, SecondaryBtn } from 'components'
import './services.styles.scss'

const Services = () => {
  const [currentAccordian, setCurrentAccordian] = useState(0)

  const openCurrentAccordian = (index) => {
    if (currentAccordian == index) {
      setCurrentAccordian(() => -1)
      return
    }

    setCurrentAccordian(() => index)
  }

  return (
    <section className='services section'>
      <div className='services_container'>
        <Heading2
          primary={'our expertise'}
          secondary={'products & services'}
          light
        />
        {data.services.map((service, index) => {
          return (
            <section className='accordian' key={service.num}>
              <div className='accordian_header'
                onClick={() => openCurrentAccordian(index)}
              >
                <h3 className='accordian_name'>
                  <span className='accordian_num'>{service.num}</span>
                  {service.name}
                </h3>
                <div className='accordian_icon'>
                  <span 
                    class='material-symbols-outlined'
                    style={!(currentAccordian === index) ? {fontSize: '24px'} : {fontSize: '0'}}>
                    add
                  </span>
                  <span 
                    class='material-symbols-outlined'
                    style={currentAccordian === index ? {fontSize: '24px'} : {fontSize: '0'}}>
                    remove
                  </span>
                </div>
              </div>

              {currentAccordian === index &&
                <div className='accordian_body'>
                  <ul className='accordian_list'>
                    <li className='accordian_list-item'>Lorem ipsum abcde</li>
                    <li className='accordian_list-item'>Lorem ipsum abcde</li>
                    <li className='accordian_list-item'>Lorem ipsum abcde</li>
                    <li className='accordian_list-item'>Lorem ipsum abcde</li>
                  </ul>

                  <div className='accordian_cta'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat praesentium eius vero amet nobis repudiandae nemo
                    </p>
                    <SecondaryBtn to='/services' name={'read more'} light />
                  </div>
                </div>
              }
            </section>
          )
        })}
      </div>
    </section>
  )
}

export default Services
