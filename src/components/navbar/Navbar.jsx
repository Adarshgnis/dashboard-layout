import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login');
  };
  return (
    <div className='nav-container'>
      <div className="nav-wrapper container">
        <div className="logo">
          <Link to="/dashboard"><img src="/src/assets/Matriye-logo.png" alt="" className="company-logo" /></Link>
        </div>
        <div className="nav-links">
          <img src="/src/assets/Group 488.png" alt="" />
          <img src="/src/assets/bell 1.png" alt="" />
          <img src="/src/assets/g119.png" alt="" />
          <div className="profile-picture">
            <Link to="/profile"><img src="/src/assets/young-beautiful-girl-wrinkled-her-lips-looking-up-high-quality-photo 1.png" alt="" /></Link>
          </div>
          <button className="button1" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar