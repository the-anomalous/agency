import React from 'react'
import { Form } from 'components'
import './contact.styles.scss'

const ContactInfo = ({heading, num, email}) => {
  return (
    <div className="info">
      <h4 className="info_heading">{heading}</h4>
      <p className="info_num">{num}</p>
      <p className="info_email">{email}</p>
    </div>
  )
}

const Contact = () => {
  return (
    <main className='layout'>
      <div className='contact_page_map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.864935893867!2d73.84665057453688!3d18.53500466873446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0841ff0f2d1%3A0xc029665f68dc9d93!2sALANKAR%20APARTMENT!5e0!3m2!1sen!2sin!4v1700325313952!5m2!1sen!2sin" width="100%" height="100%" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <section className='contact_page section'>
        <div className='contact_page_wrapper'>
          <div className='contact_page-heading'>
            <h3 className='contact_page-h3'>
              Aapke Ek Ek Sawal <br /> Humaare Do Do Jawab
            </h3>
            <p className='contact_page-subheading'>AdroytHub Pvt. Ltd.</p>
            <p className='contact_page-text'>
              One of the leading digital marketing agency in Pune. Write to us
              about any doubts, We would be glad to discuss your business
              targets and how we can achieve them through our digital marketing
              services in Bangalore, Delhi and Mumbai. We'll get back to you at
              the earliest.
            </p>
          </div>
          <div className='contact_page-form'>
            <Form />
          </div>
          <div className="contact_page-info">
            <ContactInfo heading={'Business Enquiries'} num={'+91 99860 68516'} email={'hello@socialpanga.com'} />
            <hr />
            <ContactInfo heading={'Career Opportunities'} num={'+91 99203 79306'} email={'coffee@socialpanga.com'} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
