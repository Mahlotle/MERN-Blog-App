import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <section className='error-page'>
    <div className='center'>
      <Link to="/" className="btn primary">Home Page.</Link>
      <h2>Page Not Found :/</h2>
    </div>
      </section>
    </div>
  )
}

export default ErrorPage
