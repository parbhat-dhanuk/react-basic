import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import axios from 'axios'
import { baseUrl } from '../../config'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {

  const navigate=useNavigate()
  const handleAddBlog=async(data)=>{
    const res=await axios.post(`${baseUrl}/blog`,data,{
      headers:{
        "Authorization":localStorage.getItem("token"),
        "Content-Type":"multipart/form-data"
      }
    })
   if(res.status===201){
    navigate("/")

   }
  }
  return (
  <Layout>
	<Form type='Create' onSubmit={handleAddBlog} />
  </Layout>
  )
}

export default AddBlog