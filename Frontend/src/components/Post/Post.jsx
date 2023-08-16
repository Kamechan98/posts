import React from 'react'
import DOMPurify from 'dompurify'

const Post = ({ post }) => {
  return (
    <div className='post'>
      <h2 className='headline'>{ post.title }</h2>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.postHTML) }}></div>
    </div>
  )
}

export default Post