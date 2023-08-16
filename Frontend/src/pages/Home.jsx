import React from 'react'
import usePosts from '../hooks/usePosts'
import Post from '../components/Post/Post'

const Home = () => {

  const { posts, loading, error } = usePosts()

  return (
    <div>
      <h1>Posts</h1>
      { loading && <p>Loading...</p> }
      { error && <p>{ error }</p> }
      {
        posts.length > 0 &&
        posts.map(post => <Post key={post._id} post={post} />)
      }
    </div>
  )
}

export default Home