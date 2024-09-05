import React from 'react'
import Form from './components/form/Form'
import axios from 'axios'
import { baseUrl } from '../../config'
import { useNavigate } from 'react-router-dom'

const Register = () => {
const navigate=useNavigate()
  const handleRegister = async(data)=>{
  const res =  await axios.post(`${baseUrl}/register`,data)
    if(res.status===201){
      navigate("/login")
    }
  }


  return (
    <Form type='Register' onSubmit={handleRegister} />
  )
}

export default Register