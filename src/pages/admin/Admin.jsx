import React, { useEffect, useLayoutEffect, useState } from 'react'
import { instance } from '../../api'
import { toast } from 'react-toastify';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {
    instance.get(`/api/users/${localStorage.getItem("id")}`, {
      headers: {
        "Authorization" : ` ${localStorage.getItem("token")}`
      }
    })
      .then(response => {
        setLoading(false)
        setProfile(response.data)
        localStorage.setItem("posts",response.data.data.posts);
        navigate("/admin/createpost")
      })
      .catch(error =>{
        setLoading(false)
        toast.error(error.response.data.message)
        navigate("/auth/login")
      })
  }, [])

  const handleLogOut = () => {
    const isUserAgreed = confirm("Are you really going to log out?")
    if(isUserAgreed){
      localStorage.removeItem("token")
      navigate("/auth/login")
    }
  }
  return (
    <>
      <div className='admin'>
        <h2>Dashboard</h2>
        {
          profile ? 
          <>
            <div key={profile.data._id} className="userData">
              <h1>{profile.data.fullname}</h1>
              <p>{profile.data.email}</p>
            </div>
            <div className="user__routes">
              <NavLink to="/admin/createpost" className={({isActive}) => isActive ? "user__routes user__routes--active" : "user__routes" } >
                <button>Create New Post</button>
              </NavLink>
              <NavLink to="/admin/managepost" className={({isActive}) => isActive ? "user__routes user__routes--active" : "user__routes"  }>
                <button>Manage Posts</button>
              </NavLink>
            </div>
          </>
          :
          <>
            {
              loading ? <p className='loading'>Loading...</p> : null
            }
          </>
          
        }

        <button onClick={handleLogOut} className="logout">Log out</button>
      </div>
      <Outlet/>
    </>
  )
}

export default Admin