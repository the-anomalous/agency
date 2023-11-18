import React from 'react'
import './loader.styles.scss'

const ErrorBoundary = () => {
  return (
    <div className='loader'>
      <div className="loader_animation"></div>
    </div>
  )
}

export default ErrorBoundary
