import React from 'react'
import { NavLink } from 'react-router-dom';
import Admin from './../../pages/admin/Admin';
const Nav = () => {
  const token = localStorage.getItem('token')
  return (
    <>
      <div className="nav__name">Exam</div>
      <div>
        {!token ?
          <ul className='nav__list'>
            <NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={'/auth/login'}>Login</NavLink>
            <NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={'/auth/signup'}>Sign up</NavLink>
          </ul>
          :
          <ul className='nav__list'>
            <NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={'/admin'}>Admin</NavLink>  
          </ul>
          }
      </div>
    </>
  )
}

export default Nav