import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className='sidebar-wrapper'>
        <div className="profile-picture">
          <img src="/src/assets/young-beautiful-girl-wrinkled-her-lips-looking-up-high-quality-photo 1.png" alt="" />
        </div>
        <h1>Jheel kaur</h1>
        <p>Student</p>
        <ul className='callToAction-icons'>
          <li><a href="#"><img src="/src/assets/Group 5462.png" alt="" /></a></li>
          <li><a href="#"><img src="/src/assets/Group 5462.png" alt="" /></a></li>
          <li><a href="#"><img src="/src/assets/Group 5462.png" alt="" /></a></li>
          <li><a href="#"><img src="/src/assets/Group 5462.png" alt="" /></a></li>
        </ul>
        <ul className="sidebar-links">
          <li>Dashboard</li>
          <li>Profile</li>
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