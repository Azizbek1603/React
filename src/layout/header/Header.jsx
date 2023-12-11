import React from 'react'
import { useLocation } from 'react-router-dom';
import Nav from './../nav/Nav';
import img from '../../assets/img.png'
const RESTRICTED_ROUTES_FOR_Header = ["/auth", "/admin", "/admin/createpost", "/admin/managepost", "/auth/signup", "/auth/login"];
const Header = () => {

  const { pathname } = useLocation()

  return RESTRICTED_ROUTES_FOR_Header.includes(pathname) ? null : (
    <>
      <div className="header">
        <Nav />
      </div>
      <img className="banner" src={img} alt="img" />
    </>
  )
}

export default Header