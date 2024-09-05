import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import axios from 'axios'
import { baseUrl } from '../../config'

const Home = () => {

  const [blogs,setBlogs]=useState([])

const fetchBlog=async()=>{
 const res=await axios.get(`${baseUrl}/blog`)
 setBlogs(res.data.data)

}


  useEffect(()=>{
    fetchBlog()
  },[])

  return (
   <Layout>
  <div className='flex flex-wrap justify-center space-x-5 mt-6'>
   
   {
    blogs.length>0 && blogs.map((blog)=>{
      return  <Card data={blog} />
      
    })
   }

  </div>
   </Layout>
  )
}

export default Home