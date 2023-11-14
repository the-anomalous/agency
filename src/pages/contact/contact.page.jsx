import React from 'react'
import { Heading2, Form } from 'components'
import './contact.styles.scss'

const Contact = () => {
  return (
    <main className="layout">

      <section className='contact_page section'>
        <Heading2 primary={'get in touch'} secondary={'contact us'} />
        <div className='contact_page_info'>
          <div className='contact_page_info-form'>
            <Form />
          </div>
          <div className='contact_page_info-address'>
            <h4 className='contact_page-heading4'>find us at</h4>
            <div className='footer_info-contact-details'>
              <span class='material-symbols-outlined'>location_on</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                officiis voluptates a saepe dolorum magni ut maxime aliquam
                soluta! Dolorum.
              </p>
            </div>
            <div className='footer_info-contact-details'>
              <span class='material-symbols-outlined'>mail</span>
              <p>agency4477@gmail.com</p>
            </div>
            <div className='footer_info-contact-details'>
              <span class='material-symbols-outlined'>call</span>
              <p>+91 9077882143</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
