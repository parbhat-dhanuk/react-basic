import React from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import axios from 'axios'
import { baseUrl } from '../../config'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlog = () => {
const {identity}=useParams()
const navigate=useNavigate()
  const handleEditBlog=async(data)=>{
  const res =  await axios.patch(`${baseUrl}/blog/${identity}`,data,{
      headers:{
        Authorization:localStorage.getItem("token"),
        "Content-Type":"multipart/form-data"
      }
    })
    if(res.status===200){
      navigate("/")
    }
  }

  return (
    <Layout>
        <Form type='Edit' onSubmit={handleEditBlog} />
    </Layout>
  )
}

export default EditBlog