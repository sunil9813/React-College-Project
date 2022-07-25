import React from 'react'
import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton
} from '@coreui/react'
import {
  useState
} from 'react'
import {
  useNavigate
} from 'react-router-dom'
import {
  addUser
} from '../rest-api/RestAPI'

const AddUser = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
    password: '',
    fullName: '',
    address: '',
  })

  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleSubmit = () => {
    addUser(user)
      .then((data) => {
        console.log('Successfully logged in')
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error)
        console.log('Error adding user')
      })
  }

  return ( <
    div >
    <
    CForm >
    <
    div className = "mb-3" >
    <
    CFormLabel htmlFor = "name" > Full Name < /CFormLabel> <
    CFormInput name = "fullName"
    type = "fullName"
    id = "fullName"
    placeholder = "Michael Mishra"
    value = {
      user.fullName
    }
    onChange = {
      handleChange
    }
    /> <
    /div> <
    div className = "mb-3" >
    <
    CFormLabel htmlFor = "username" > Username < /CFormLabel> <
    CFormInput name = "username"
    type = "username"
    id = "username"
    placeholder = "Michael Mishra"
    value = {
      user.username
    }
    onChange = {
      handleChange
    }
    /> <
    /div> <
    div className = "mb-3" >
    <
    CFormLabel htmlFor = "password" > Password < /CFormLabel> <
    CFormInput name = "password"
    type = "password"
    id = "password"
    placeholder = "Password"
    value = {
      user.password
    }
    onChange = {
      handleChange
    }
    /> <
    /div>

    <
    div className = "mb-3" >
    <
    CFormLabel htmlFor = "email" > Email address < /CFormLabel> <
    CFormInput name = "email"
    type = "email"
    id = "email"
    placeholder = "example@gmail.com"
    value = {
      user.email
    }
    onChange = {
      handleChange
    }
    /> <
    /div> <
    div className = "mb-3" >
    <
    CFormLabel htmlFor = "address" > Address < /CFormLabel> <
    CFormInput name = "address"
    type = "address"
    id = "address"
    placeholder = "Address"
    value = {
      user.address
    }
    onChange = {
      handleChange
    }
    /> <
    /div> <
    div className = "mb-3" >
    <
    CFormLabel htmlFor = "address" > Age < /CFormLabel> <
    CFormInput name = "age"
    type = "number"
    id = "age"
    placeholder = "Age"
    value = {
      user.age
    }
    onChange = {
      handleChange
    }
    /> <
    /div> <
    CButton onClick = {
      handleSubmit
    }
    component = "input"
    type = "submit"
    color = "primary"
    value = "Submit" /
    >
    <
    /CForm> <
    /div>
  )
}

export default AddUser