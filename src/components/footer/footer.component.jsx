import React from 'react'
import './footer.styles.scss'
import { NavLinks } from 'components'
import footerImg from 'assets/footer.png'

const Footer = () => {
  return (
    <footer className='footer section'>
      <section className='footer_info'>
        <div className='footer_info_start'>
          <div className='footer_info-logo'>
            {
              <img
                src={footerImg}
                alt='Logo image'
              />
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              officiis voluptates a saepe dolorum magni ut maxime aliquam
              soluta! Dolorum.
            </p>
          </div>
          <div className='footer_info-contact-details'>
            <span className='material-symbols-outlined'>mail</span>
            <p>agency4477@gmail.com</p>
          </div>
          <div className='footer_info-contact-details'>
            <span className='material-symbols-outlined'>call</span>
            <p>+91 9077882143</p>
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
