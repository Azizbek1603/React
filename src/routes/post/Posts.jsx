import React, {useEffect, useState } from 'react'
import {instance} from "../../api/index.js"
import {truncate} from '../../helpers/truncate.js'
import { useLocation, Link } from 'react-router-dom';
let RESTRICTED_ROUTES_FOR_Posts = ["/auth", "/admin", "/admin/createpost", "/admin/managepost", "/auth/signup", "/auth/login", "/singlepost/:id"];

const Posts = () => {
  const [posts, setPosts] = useState([])
  const { pathname } = useLocation()
  if(pathname.split("/").includes("singlepost")){
    RESTRICTED_ROUTES_FOR_Posts.push(pathname)
  }

  useEffect(() => {
    const data = async () =>{
      try{
        const response = await instance("api/posts");
        setPosts(response.data.data);
       }
       catch(error){
        console.log(error);
       }
    }  
    data()  
  }, [])

  return RESTRICTED_ROUTES_FOR_Posts.includes(pathname) ? null : (
    <React.Fragment>
      <div className="posts">
        <h2>All Posts</h2>
        <div className="allpost">
          {
            posts.map(post =>
              <Link to={`/singlepost/${post._id}`} className="singlepost" key={post._id}>
                <img src={post.image} alt="" />
                <h1>{post.title}</h1>
                <p>{truncate(post.description)}</p>
              </Link>              
              )

          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default Posts