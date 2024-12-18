import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
 <footer>
  <ul className='footer__categories'>
    <li><Link to="posts/categories/:Agriculture">Agriculture</Link></li>
    <li><Link to="posts/categories/:Business">Business</Link></li>
    <li><Link to="posts/categories/:Education">Education</Link></li>
    <li><Link to="posts/categories/:Entertainment">Entertainment</Link></li>
    <li><Link to="posts/categories/:Art">Art</Link></li>
    <li><Link to="posts/categories/:Aesthetics">Aesthetics</Link></li>
    <li><Link to="posts/categories/:Fashion">Fashion</Link></li>
    <li><Link to="posts/categories/:Travel">Travel</Link></li>
    <li><Link to="posts/categories/:Health & Wellness">Health & Wellness</Link></li>

  </ul>
  <div className='footer__copyright'>
<small>All Rights Reserved &copy; Copyright, MBlog.</small>
  </div>
 </footer>
  )
}

export default Footer
