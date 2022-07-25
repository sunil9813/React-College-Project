import axios from 'axios'
import {
  getToken
} from '../auth/AuthUtil'

const login = (loginDto) => {
  return axios({
    url: 'http://localhost:8080/login',
    method: 'POST',
    data: loginDto,
  })
}
const addUser = (UserDto) => {
  return axios({
    url: 'http://localhost:8080/users',
    method: 'POST',
    data: UserDto,
  })
}

const editUser = (UserDto) => {
  return axios({
    url: 'http://localhost:8080/users',
    method: 'PUT',
    data: UserDto,
    headers: {
      Authorization: getToken(),
    },
  })
}
const listUser = () => {
  return axios({
    url: 'http://localhost:8080/users',
    method: 'GET',
    headers: {
      Authorization: getToken(),
    },
  })
}
const getUser = (id) => {
  return axios({
    url: 'http://localhost:8080/users/' + id,
    method: 'GET',
    headers: {
      Authorization: getToken(),
    },
  })
}
const deleteUser = (id) => {
  return axios({
    url: 'http://localhost:8080/users/' + id,
    method: 'DELETE',
    headers: {
      Authorization: getToken(),
    },
  })
}

/*-------------Category---------- */
const addCategory = (UserDto) => {
  return axios({
    url: 'http://localhost:8080/category',
    method: 'POST',
    data: UserDto,
  })
}
const listCategory = () => {
  return axios({
    url: 'http://localhost:8080/category',
    method: 'GET',
    headers: {
      Authorization: getToken(),
    },
  })
}

/*-------------post---------- */
const addpost = (UserDto) => {
  return axios({
    url: 'http://localhost:8080/category',
    method: 'POST',
    data: UserDto,
  })
}
const listpost = () => {
  return axios({
    url: 'http://localhost:8080/category',
    method: 'GET',
    headers: {
      Authorization: getToken(),
    },
  })
}

export default login
export {
  addUser,
  listUser,
  editUser,
  getUser,
  deleteUser,
  addCategory,
  listCategory,
  addpost,
  listpost,
}