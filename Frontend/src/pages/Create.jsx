import React, { useCallback, useState } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

const Create = () => {

    const [error, setError] = useState('test')
    const [quill, setQuill] = useState()
    const [title, setTitle] = useState('')

    const quillWrapper = useCallback(wrapper => {
        
        if(wrapper == null) return

        const TOOLBAR_OPTIONS = [
            ['bold', 'italic', 'underline'],
            ['image'],
            [{'header': [1, 2, 3, 4, 5, 6, false ]}],
            [{'color': []}, { 'background': [] }],
            [{'font': [] }],
            [{'align': [] }],
            ['clean']

        ]

        wrapper.innerHTML = ''
        const editor = document.createElement('div')
        wrapper.append(editor)
        const q = new Quill(editor, { theme: 'snow', modules: { toolbar: TOOLBAR_OPTIONS } })

    }, [])

    const handleSubmit = async e => {
        e.preventDefault()
    
        const post = {
          title,
          postHTML: quill.root.innerHTML
        }
    
        try {
          
          const res = await fetch('http://localhost:8080/api/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
              'content-type': 'application/json'
            }
          })
    
          if(res.status !== 201) {
            const error = await res.json()
            console.log(error)
            throw new Error(error.message)
          }
    
          setError(null)
          navigate('/')
    
        } catch (err) {
          console.log(err.message)
          setError(err.message)
        }
    
      }
    

  return (
        <form className='create-form'>

            <div className='form-group'>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' value={title} onChange={e => setTitle(e.target.value)} />
            </div>

        <div id='q-wrapper' ref={quillWrapper}></div>

        { error && <p className='error'>{ error }</p> }
        <button className='btn'>Send</button>

    </form>
  )
}

export default Create