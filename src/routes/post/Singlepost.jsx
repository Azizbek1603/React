import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom"
import { instance } from "../../api";
const RESTRICTED_ROUTES_FOR_Posts = ["/auth", "/admin", "/auth/signup", "/auth/login"];


const Product = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const { pathname } = useLocation()
    useEffect(() => {
        const fetchData = async () => {
           try{
            const response = await instance(`/api/posts/${id}`);
            setPost(response.data)
           }
           catch(error){
            console.log(error)
           }
        }

        fetchData()
    }, [])

  return RESTRICTED_ROUTES_FOR_Posts.includes(pathname) ? null :  (
    <div>
        {
            post &&
            <div className="mainpost">
                <img width={300} height={300} src={post.image} alt="" />
                <div className="mainpost__wrapper">
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            </div>
        }  
    </div>
  )
}

export default Product