import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const userName = localStorage.getItem("userName")
    if (userName) {
      setUserName(userName)
    }
  }, [])

  const location = useLocation();

  return (
    <div className="sidebar-container">
      <div className='sidebar-wrapper'>
        <div className="profile-picture">
          <Link to="/profile"><img src="/src/assets/young-beautiful-girl-wrinkled-her-lips-looking-up-high-quality-photo 1.png" alt="" /></Link>
        </div>
        <h1>{userName}</h1>
        <p>Student</p>
        <ul className='callToAction-icons'>
          <li><a href="#"><img src="/src/assets/Group 5459.png" alt="" /></a></li>
          <li><a href="#"><img src="/src/assets/Group 5460.png" alt="" /></a></li>
          <li><a href="#"><img src="/src/assets/Group 5461.png" alt="" /></a></li>
          <li><a href="#"><img src="/src/assets/Group 5462.png" alt="" /></a></li>
        </ul>
        <ul className="sidebar-links">
          <li className={location.pathname === '/dashboard' ? 'activeLink' : ''}><Link to="/dashboard" >Dashboard</Link></li>
          <li className={location.pathname === '/profile' ? 'activeLink' : ''}><Link to="/profile" >Profile</Link></li>
          <li>Documents</li>
          <li>My Courses</li>
          <li>Payment History</li>
          <li>Notification</li>
          <li>Raise a Ticket</li>
          <li>Apply for a leave</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar