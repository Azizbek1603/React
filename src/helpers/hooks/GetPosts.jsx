import React from 'react'
import { useState, useEffect } from 'react'
import { instance } from '../../api'
import {toast} from "react-toastify"
import { DeletePost } from './DeletePost.js'
import {truncate} from "../truncate.js"
import { Link } from 'react-router-dom';
const GetPosts = ({id}) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        instance.get(`api/posts/${id}`)
          .then(response => {
            setPosts(response.data)
            console.log(response.data);
          })
          .catch(error =>{
            console.log(error);
          })
    }, [])
    return (
        <>
            { id ?
                <div className="abc">
                    <Link to={`/singlepost/${posts._id}`} className="post">
                    <img src={posts.image} alt="" />
                    <h2>{posts.title}</h2>
                    <p>{posts.description}</p>
                    </Link>
                    <button className='button' onClick={DeletePost(posts._id)}>Delete</button>
                </div>
                :
                "No posts"
            }
        </>
    )
}

export default GetPosts