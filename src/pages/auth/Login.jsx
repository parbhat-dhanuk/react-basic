import React from 'react'
import Form from './components/form/Form'
import axios from 'axios'
import { baseUrl } from '../../config'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const navigate=useNavigate()
  const handleLogin=async (data)=>{
   const res= await axios.post(`${baseUrl}/login`,data)
   if(res.status===200){
    localStorage.setItem("token",res.data.token)
    navigate("/")
   }
  
  }


  return (
   
  <Form type='Login' onSubmit={handleLogin} />
  )
}

export default Login