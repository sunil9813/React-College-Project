import React from 'react'
import { CForm, CFormLabel, CFormInput, CButton, CFormTextarea } from '@coreui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addpost } from '../rest-api/RestAPI'

const AddPost = () => {
  const navigate = useNavigate()

  const [post, setPost] = useState({
    image: '',
    title: '',
    description: '',
    author: '',
    category: '',
    date: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleSubmit = () => {
    addpost(post)
      .then((data) => {
        console.log('Successfully logged in')
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error)
        console.log('Error adding post')
      })
  }

  return (
    <div>
      <CForm>
        <div className="mb-3">
          <CFormLabel htmlFor="name">File input</CFormLabel>
          <CFormInput
            name="image"
            type="file"
            id="file"
            value={post.image}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="postname">Title</CFormLabel>
          <CFormInput
            name="title"
            type="text"
            id="title"
            placeholder="Title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="password">Description</CFormLabel>
          <CFormTextarea
            name="description"
            type="text"
            id="description"
            placeholder="Description"
            value={post.description}
            onChange={handleChange}
            rows="5"
          />
        </div>

        <div className="mb-3">
          <CFormLabel htmlFor="email">Author</CFormLabel>
          <CFormInput
            name="author"
            type="text"
            id="author"
            placeholder="By Salman Khan"
            value={post.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="address">Category</CFormLabel>
          <CFormInput
            name="category"
            type="text"
            id="category"
            placeholder="category"
            value={post.category}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="address">Date</CFormLabel>
          <CFormInput
            name="date"
            type="date"
            id="date"
            placeholder="Date"
            value={post.date}
            onChange={handleChange}
          />
        </div>
        <CButton
          onClick={handleSubmit}
          component="input"
          type="submit"
          color="primary"
          value="Submit"
        />
      </CForm>
    </div>
  )
}

export default AddPost
