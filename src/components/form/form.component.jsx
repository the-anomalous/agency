import React from 'react'
import { useState } from "react";
import {PrimaryBtn} from 'components'       
import './form.styles.scss'

const Form = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    subject: "",
    text: ""
  })

  // const [error, setError] = useState('')
  // const [resolving, setResolving] = useState(false)
  // const [success, setSuccess] = useState(false) 

  const handleChange = ({ target }) => {
    setInfo(prevInfo => {
      return { ...prevInfo, [target.name]: target.value }
    })
  }

  const clearForm = () => {
    setResolving(() => false)
    setInfo({
      name: "",
      email: "",
      subject: "",
      text: ""
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
    <form className="form">
        <div className="form__group form__name">
          <input
            type="text"
            className="form__input"
            id='name'
            name='name'
            placeholder='Your Name'
            value={info.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className="form__label">
            Name
          </label>
        </div>

        <div className="form__group form__email">
          <input
            type="email"
            className="form__input"
            id='email'
            name='email'
            placeholder='Your Email'
            value={info.email}
            onChange={handleChange}
            required />
          <label htmlFor="email" className="form__label">
            Email
          </label>
        </div>

        <div className="form__group form__subject">
          <input
            type="subject"
            className="form__input"
            id='subject'
            name='subject'
            placeholder='Subject'
            value={info.subject}
            onChange={handleChange}
            required />
          <label htmlFor="subject" className="form__label">
            Subject
          </label>
        </div>

        <div className="form__group form__message">
          <textarea
            className="form__input form__textarea"
            id='message'
            name='text'
            placeholder='Message'
            value={info.text}
            onChange={handleChange}
            required />
          <label htmlFor="message" className="form__label">
            Message
          </label>
        </div>
       <div className="form__btn">
        <PrimaryBtn name={'send message'} />
      </div> 
      
      </form>
  )
}

export default Form
