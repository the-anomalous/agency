import React, { useState } from 'react'
import data from './services'
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
    <section className='services section_red'>
      <div className='dotgrid'></div>
      <div className='services_container'>
        <Heading2 primary={'our expertise'} secondary={'products & services'} light/>
        {data.map((service, index) => {
          return (
            <section className='accordian' key={service.num}>
              <div
                className='accordian_header'
                onClick={() => openCurrentAccordian(index)}
              >
                <h3 className='accordian_name'>
                  <span className='accordian_num'>{service.num}</span>
                  {service.name}
                </h3>
                <div className='accordian_icon'>
                  <span
                    className='material-symbols-outlined'
                    style={
                      !(currentAccordian === index)
                        ? { fontSize: '24px' }
                        : { fontSize: '0' }
                    }
                  >
                    add
                  </span>
                  <span
                    className='material-symbols-outlined'
                    style={
                      currentAccordian === index
                        ? { fontSize: '24px' }
                        : { fontSize: '0' }
                    }
                  >
                    remove
                  </span>
                </div>
              </div>

              {currentAccordian === index && (
                <div className='accordian_body'>
                  <ul className='accordian_list'>
                    {
                      service.points.map((data, index) => {
                        return (
                          <li key={`points${index}`} className='accordian_list-item'>{data}</li>
                        )
                      })
                    }
                  </ul>

                  <div className='accordian_cta'>
                    <p>
                      {service.text}
                    </p>
                    <SecondaryBtn to={service.to} name={'read more'} light/>
                  </div>
                </div>
              )}
            </section>
          )
        })}
      </div>
    </section>
  )
}

export default Services
