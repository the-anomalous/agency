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
