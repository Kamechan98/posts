import React, { useEffect, useState } from 'react'

const usePosts = () => {

    const [posts, setPosts ] = useState([])
    const [loading, setLoading ] = useState(false)
    const [error, setError ] = useState(null)

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true)
            const res = await fetch('http://localhost:9999/api/posts/')
            if(!res.ok) {
                setLoading(false)
                setError('something went wrong')
                return
            }

            const data = await res.json()
      setLoading(false)
      setPosts(data)
    }
    getPosts()
  }, [])

  return { posts, loading, error }
}


export default usePosts