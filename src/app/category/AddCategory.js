import React from 'react'
import { CForm, CFormLabel, CFormInput, CButton } from '@coreui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addCategory } from '../rest-api/RestAPI'

const AddCategory = () => {
  const navigate = useNavigate()

  const [category, setCategory] = useState({
    categoryname: '',
  })

  const handleChange = (e) => {
    const { category, value } = e.target
    setCategory((prevState) => ({
      ...prevState,
      [category]: value,
    }))
  }
  const handleSubmit = () => {
    addCategory(category)
      .then((data) => {
        console.log('Successfully add Category Name')
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error)
        console.log('Error adding Category')
      })
  }

  return (
    <div>
      <CForm size="xl">
        <div className="mb-3">
          <CFormLabel htmlFor="name">Category</CFormLabel>
          <CFormInput
            name="Category"
            type="text"
            id="category"
            placeholder="Category Name"
            value={category.category}
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

export default AddCategory
