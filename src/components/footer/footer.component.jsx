import React from 'react'
import './footer.styles.scss'
import { NavLinks } from 'components'

const Footer = () => {
  return (
    <footer className='footer section'>
      <section className='footer_info'>
        <div className='footer_info_start'>
          <div className='footer_info-logo'>
            {
              // <img src='https://ik.imagekit.io/ml22hal4lxj/adroyt_images/o-01_5zZiA3slz.png?updatedAt=1700031803112' alt='Logo image' />
            }
          </div>

          <div className='footer_info_nav'>
            <h4 className='heading4'>useful links</h4>
            <ul className='footer_info_nav-links'>
              <NavLinks light />
            </ul>
          </div>
        </div>

        <div className='footer_info-contact'>
          <h4 className='heading4'>find us at</h4>
          <div className='footer_info-contact-details'>
            <span className='material-symbols-outlined'>location_on</span>
            <p>
              Alankar Apartment-Office No. 101, behind Kotak bank, Bhandarkar
              Road, Pune 411004.
            </p>
          </div>
          <div className='footer_info-contact-details'>
            <span className='material-symbols-outlined'>mail</span>
            <p>hello@adroythub.com</p>
          </div>
          <div className='footer_info-contact-details'>
            <span className='material-symbols-outlined'>call</span>
            <p>+91 9665675234</p>
          </div>
        </div>
      </section>

      <section className='footer_copyright'>
        <p>© 2023 adroyt – all rights Reserved.</p>
      </section>
    </footer>
  )
}

export default Footer
