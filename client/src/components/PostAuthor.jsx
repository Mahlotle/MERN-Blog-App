import React from 'react'
import {Link} from 'react-router-dom'
import Avatar from '../Images/avatar1.jpg'

const PostAuthor = () => {
  return (
    <div>
     <Link to={'posts/users/'} className='post__author'>
     <div className="post__author-avator">
        <img src={Avatar} alt="" />
     </div>
     <div className="post__auther-details">
        <h5>By: Mav Masemola</h5>
        <small>Just Now</small>
     </div>
     </Link>
    </div>
  )
}

export default PostAuthor
