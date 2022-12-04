import React from 'react'
import Profile from "../components/profile/Profile"
import Navigationbar from "../components/Navigationbar";
import ProfilePosts from '../components/profile/ProfilePosts';
import { Outlet } from "react-router-dom";
function Profilepage() {
  document.title = 'Profile'
  return (
    <div className='px-[70px]'>
        <Navigationbar />
        <h1 className='mt-[70px] text-center'>Profile</h1>
        <Outlet />
    </div>
  )
}

export default Profilepage