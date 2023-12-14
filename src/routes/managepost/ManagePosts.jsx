import React from 'react'
import { useState, useEffect } from 'react'
import { instance } from '../../api'
import {toast} from "react-toastify"
import GetPosts from './../../helpers/hooks/GetPosts';
const ManagePosts = () => {
  let postArray = localStorage.getItem("posts")
  postArray = postArray.split(",")

  return (
    <div className='manageposts'>
      <h2>Manage Posts</h2>
      <hr />
      <div className='posts'>
          {
            postArray.map(post => 
              <GetPosts key={post} id={post} /> 
            )
          }
      </div>
    </div>
  )
}

export default ManagePosts