import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="nav-wrapper container">
        <div className="logo">
          <img src="/src/assets/Matriye-logo.png" alt="" className="company-logo" />
        </div>
        <div className="nav-links">
          <img src="/src/assets/Group 488.png" alt="" />
          <img src="/src/assets/bell 1.png" alt="" />
          <img src="/src/assets/g119.png" alt="" />
          <div className="profile-picture">
            <img src="/src/assets/young-beautiful-girl-wrinkled-her-lips-looking-up-high-quality-photo 1.png" alt="" />
          </div>
          <button className="button1">
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar