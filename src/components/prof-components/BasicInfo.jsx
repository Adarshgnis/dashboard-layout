import React, { useEffect, useState } from 'react'
import './BasicInfo.css'

const BasicInfo = () => {

  const [userName, setUserName] = useState("")

  useEffect(() => {
    const userName = localStorage.getItem("userName")
    if (userName) {
      setUserName(userName)
    }
  }, [])

  return (
    <div className='basicInfo-container'>
      <div className="basicInfo-wrapper">
        <div className="firstPart">
          <div className="profile-picture">
            <img src="/src/assets/young-beautiful-girl-wrinkled-her-lips-looking-up-high-quality-photo 1.png" alt="" />
          </div>
          <div className="content">
            <h1 className="heading1">{userName}</h1>
            <h5>Student</h5>
            <p>Student ID : MAC1920</p>
            <p>Date of Joining : 12/02/2022</p>
            <button>Send message</button>
          </div>
        </div>
        <hr />
        <div className="secondPart">
          <p>Phone <span>:</span> 0987654321</p>
          <p>Email <span>:</span> jheel.meel@gmail.com</p>
          <p>Birthday <span>:</span> 01/01/1991</p>
          <p>Address <span>:</span> 12th Street, Seatle</p>
          <p>Gender <span>:</span> Female</p>
          <p>Reports To <span>:</span> No one</p>
        </div>
      </div>
    </div>
  )
}

export default BasicInfo