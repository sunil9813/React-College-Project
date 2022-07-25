import React from 'react'

//const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

/*-------------Users----------- */
const ViewUser = React.lazy(() => import('./app/users/ViewUser'))
const AddUser = React.lazy(() => import('./app/users/AddUser'))
const EditUser = React.lazy(() => import('./app/users/EditUser'))

/*-------------Category----------- */
const ViewCategory = React.lazy(() => import('./app/category/ViewCategory'))
const AddCategory = React.lazy(() => import('./app/category/AddCategory'))
const EditCategory = React.lazy(() => import('./app/category/EditCategory'))

/*-------------post----------- */
const ViewPost = React.lazy(() => import('./app/post/ViewPost'))
const AddPost = React.lazy(() => import('./app/post/AddPost'))
const EditPost = React.lazy(() => import('./app/post/EditPost'))

const routes = [
  { path: '/', name: 'Home' },
  //{ path: '/dashboard', name: 'Dashboard', element: Dashboard },

  /*-------------Users----------- */
  { path: '/users', name: 'View Users', element: ViewUser },
  { path: '/users/edit/:id', name: 'Edit Users', element: EditUser },
  { path: '/users/add', name: 'Add Users', element: AddUser },

  /*-------------Category----------- */
  { path: '/category', name: 'View Users', element: ViewCategory },
  { path: '/category/edit/:id', name: 'Edit Users', element: EditCategory },
  { path: '/category/add', name: 'Add Users', element: AddCategory },

  /*-------------post----------- */
  { path: '/post', name: 'View Users', element: ViewPost },
  { path: '/post/edit/:id', name: 'Edit Users', element: EditPost },
  { path: '/post/add', name: 'Add Users', element: AddPost },
]

export default routes
