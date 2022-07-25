import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { deleteUser, listUser } from '../rest-api/RestAPI'
import { NavLink } from 'react-router-dom'
import { FaTrashAlt, FaPen } from 'react-icons/fa'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
const ViewUser = () => {
  const [rows, setRows] = useState([])

  const [deleteModal, setDeleteModal] = useState({
    visible: false,
    id: '',
  })

  useEffect(() => {
    loadUser()
  }, [])

  const columns = [
    {
      name: 'S.N',
      selector: (row) => row.id,
    },
    {
      name: 'Username',
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: 'Name',
      selector: (row) => row.fullName,
      sortable: true,
    },
    {
      name: 'Age',
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Address',
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <div>
          <NavLink to={`/users/edit/${row.id}`}>
            <FaPen color="#202020" />
          </NavLink>
          &nbsp; &nbsp;
          <FaTrashAlt
            color="#202020"
            onClick={() => setDeleteModal({ visible: true, id: row.id })}
          />
        </div>
      ),
    },
  ]
  const loadUser = () => {
    listUser()
      .then((res) => {
        let index = 1
        return res.data.map((user) => {
          return { ...user, sn: index++ }
        })
      })
      .then((rows) => {
        setRows(rows)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleDelete = (id) => {
    console.log('Deleting users ' + id)
    deleteUser(id)
      .then((res) => {
        console.log('User deleted successfully')
        window.location.reload(false)
      })
      .catch((error) => {
        console.log('User deletion failed')
      })
  }

  return (
    <div>
      <DataTable striped columns={columns} data={rows} pagination />

      <CModal visible={deleteModal.visible} onClose={() => setDeleteModal({ visible: false })}>
        <CModalHeader>
          <CModalTitle>Deletion Confirmation</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Deleted user are lost permanently. <br />
          Are you sure , you want to delete user ?
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setDeleteModal({ visible: false })}>
            Cancel
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              setDeleteModal({ visible: false })
              handleDelete(deleteModal.id)
            }}
          >
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default ViewUser
