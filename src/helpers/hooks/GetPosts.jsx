import React from 'react'
import { useState, useEffect, memo, useMemo } from 'react'
import { instance } from '../../api'
import { DeletePost } from './DeletePost.js'
import { Link } from 'react-router-dom';
const GetPosts = ({id}) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        instance.get(`api/posts/${id}`)
          .then(response => {
            setPosts(response.data)
          })
          .catch(error =>{
            console.log(error);
          })
    }, [])

    const deletePost = (id) => { 
        let postId = localStorage.getItem("posts").split(",")
        console.log(postId);
        if(id){
          try{
            instance.delete(`api/posts/${id}`)
              .then(response => {
                console.log(response);
                if(response.status === 204){
                  alert("this post deleted successfully")
                  window.location.reload()
                }
              })
          }
          catch(error){
            console.log(error);
          }
        }        
      }

    return (
        <React.Fragment>
            { id ?
                <div className="abc">
                    <Link to={`/singlepost/${posts._id}`} className="post">
                    <img src={posts.image} alt="" />
                    <h2>{posts.title}</h2>
                    <p>{posts.description}</p>
                    </Link>
                    <button className='button' onClick={() => deletePost(posts._id)}>Delete</button>
                </div>
                :
                "No posts"
            }
        </React.Fragment>
    )
}

export default GetPosts