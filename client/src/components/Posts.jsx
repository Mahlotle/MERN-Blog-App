import React, { useState } from 'react'

import thumbnail1 from '../Images/blog1.jpg'
import thumbnail2 from '../Images/blog2.jpg'
import thumbnail3 from '../Images/blog3.jpg'
import thumbnail4 from '../Images/blog4.jpg'
import thumbnail5 from '../Images/blog5.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
  {
    id: '1',
    thumbnail: thumbnail1,
    category: "Lifestyle",
    title: "10 Tips to Improve Your Daily Routine",
    desc: "Discover how to make small changes in your daily routine to boost productivity and happiness.",
    authorID: 101
  },
  {
    id: '2',
    thumbnail: thumbnail2,
    category: "Fashion",
    title: "Top Trends for This Season",
    desc: "Explore the hottest fashion trends this season and learn how to style them with confidence.",
    authorID: 102
  },
  {
    id: '3',
    thumbnail: thumbnail3,
    category: "Travel",
    title: "Must-Visit Destinations for 2024",
    desc: "From tropical beaches to bustling cities, these destinations should be on your travel list for 2024.",
    authorID: 103
  },
  {
    id: '4',
    thumbnail: thumbnail4,
    category: "Health & Wellness",
    title: "How to Start a Healthy Lifestyle",
    desc: "Tips and tricks to kickstart a healthy lifestyle, from diet to exercise and mindfulness.",
    authorID: 104
  },
  {
    id: '5', 
    thumbnail: thumbnail5,
    category: "Tech",
    title: "Top 5 Gadgets Every Influencer Needs",
    desc: "These gadgets can help elevate your content and simplify your workflow as a social media influencer.",
    authorID: 105
  }
]

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='posts'>
      <div className='container posts__container'>
      {
        posts.map(({ id, thumbnail, category, title, desc, authorID }) => 
          <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID} />
        )
      }
      </div>
    </section>
  )
}

export default Posts
