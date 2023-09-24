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
          <div className="parentDiv paddingDiv">
            <div className="child1">
              <p className="editCont-p">Phone</p>
              <p className="editCont-p">:</p>
            </div>
            <div className="child2">
              <p className="editCont-p">0987654321</p>
            </div>
          </div>
          <div className="parentDiv paddingDiv">
            <div className="child1">
              <p className="editCont-p">Email</p>
              <p className="editCont-p">:</p>
            </div>
            <div className="child2">
              <p className="editCont-p">jheel.meel@gmail.com</p>
            </div>
          </div>
          <div className="parentDiv paddingDiv">
            <div className="child1">
              <p className="editCont-p">Birthday</p>
              <p className="editCont-p">:</p>
            </div>
            <div className="child2">
              <p className="editCont-p">01/01/1991</p>
            </div>
          </div>
          <div className="parentDiv paddingDiv">
            <div className="child1">
              <p className="editCont-p">Address</p>
              <p className="editCont-p">:</p>
            </div>
            <div className="child2">
              <p className="editCont-p">12th Street, Seatle</p>
            </div>
          </div>
          <div className="parentDiv paddingDiv">
            <div className="child1">
              <p className="editCont-p">Gender</p>
              <p className="editCont-p">:</p>
            </div>
            <div className="child2">
              <p className="editCont-p">female</p>
            </div>
          </div>
          <div className="parentDiv paddingDiv">
            <div className="child1">
              <p className="editCont-p">Reports To</p>
              <p className="editCont-p">:</p>
            </div>
            <div className="child2">
              <p className="editCont-p">No one</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicInfo