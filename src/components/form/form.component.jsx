import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { PrimaryBtn } from 'components'
import './form.styles.scss'

const Form = () => {
  const formRef = useRef();

// console.log(form.current[1])
  // const [error, setError] = useState('')
  // const [resolving, setResolving] = useState(false)
  // const [success, setSuccess] = useState(false)

  const handleChange = ({ target }) => {
    setInfo((prevInfo) => {
      return { ...prevInfo, [target.name]: target.value }
    })
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    const serviceID = 'service_uh8w91e'
    const templeateID = 'template_mfmnqbr'
    const publicID = 'TKEaPcWm62gF9bqt6'
    try {
      await emailjs.sendForm(
        serviceID,
        templeateID,
        formRef.current,
        publicID,
      )
      alert('Email sent')
    } catch (err) {
      alert('email not sent')
      console.log(err)
    }
  }

  const clearForm = () => {
    setResolving(() => false)
    setInfo({
      name: '',
      email: '',
      subject: '',
      text: '',
    })
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
      <div className='form__btn'>
        <button type='submit'> send message</button>
        {
          // <PrimaryBtn name={'send message'}  />
        }
      </div>
    </form>
  )
}

export default Form
