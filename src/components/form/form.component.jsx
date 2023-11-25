import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './form.styles.scss'

const Form = () => {
  const formRef = useRef()

  const [resolving, setResolving] = useState(false)
  // const [error, setError] = useState('')
  // const [success, setSuccess] = useState(false)

  const clearForm = () => {
    const inputElements = formRef.current
    for (let i = 0; i < 4; i++) {
      inputElements[i].value = ''
    }
  }

  // const onSuccess = () => {
  //   setSuccess(() => true)
  //   clearForm()
  //   setTimeout(() => setSuccess(false), 2200)
  // }

  // const onError = () => {
  //   setError(() => '*Could not submit the mail')
  //   clearForm()
  //   setTimeout(() => setError(''), 2000)
  // }
  const sendEmail = async (e) => {
    e.preventDefault()
    const serviceID = 'service_uh8w91e'
    const templeateID = 'template_mfmnqbr'
    const publicID = 'TKEaPcWm62gF9bqt6'
    try {
      setResolving(true)
      await emailjs.sendForm(serviceID, templeateID, formRef.current, publicID)
      clearForm()
      setResolving(false)
      setTimeout(() => alert('Email sent'), 0)     
    } catch (err) {
      setResolving(false)
      setTimeout(() => alert('Email not sent'), 0)     
      // console.log(err)
    }
  }

  return (
    <form ref={formRef} className='form' onSubmit={sendEmail}>
      <div className='form__group form__name'>
        <input
          type='text'
          className='form__input'
          id='name'
          name='from_name'
          placeholder='Your Name'
          required
        />
        <label htmlFor='name' className='form__label'>
          Name
        </label>
      </div>

      <div className='form__group form__email'>
        <input
          type='email'
          className='form__input'
          id='email'
          name='reply_to'
          placeholder='Your Email'
          required
        />
        <label htmlFor='email' className='form__label'>
          Email
        </label>
      </div>

      <div className='form__group form__subject'>
        <input
          type='subject'
          className='form__input'
          id='subject'
          name='from_subject'
          placeholder='Subject'
          required
        />
        <label htmlFor='subject' className='form__label'>
          Subject
        </label>
      </div>

      <div className='form__group form__message'>
        <textarea
          className='form__input form__textarea'
          id='message'
          name='message'
          placeholder='Message'
          required
        />
        <label htmlFor='message' className='form__label'>
          Message
        </label>
      </div>
      <button type='submit' className='submit_btn'>
        {resolving ? (
          <i
            class='fa-solid fa-spinner fa-spin-pulse'
            style={{ color: '#2874f0' }}
          ></i>
        ) : (
          <i
            class='fa-solid fa-arrow-right-to-bracket'
            style={{ color: '#2874f0' }}
          ></i>
        )}
      </button>
    </form>
  )
}

export default Form
