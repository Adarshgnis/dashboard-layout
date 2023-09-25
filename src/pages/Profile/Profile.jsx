import React, { useMemo, useState } from 'react'
import './Profile.css'
import BasicInfo from '../../components/prof-components/BasicInfo'
import MyProfile from '../../components/prof-components/my-profile/MyProfile'
import Projects from '../../components/prof-components/projects/Projects'
import Documents from '../../components/prof-components/documents/Documents'

const Profile = () => {

  const [activeTab, setActiveTab] = useState('My Profile');

  const handleTabClicks = (tab) => {
    setActiveTab(tab)
  }

  const activeContent = useMemo(() => {
    switch (activeTab) {
      case 'Projects':
        return <Projects />
      case 'Documents':
        return <Documents />
      default:
        return <MyProfile />
    }
  }, [activeTab])

  return (
    <div className='profile-container'>
      <div className="profile-wrapper">
        <h1 className='heading1'>Profile</h1>
        <p className='profilewrapperP'>Dashboard <span>&gt;</span> Profile</p>
        <BasicInfo />
        <ul className='tabSwitchingLinks'>
          <li><a onClick={() => handleTabClicks('My Profile')} className={activeTab === 'My Profile' ? 'activeTab' : ''}>My Profile</a></li>
          <li><a onClick={() => handleTabClicks('Projects')} className={activeTab === 'Projects' ? 'activeTab' : ''}>Projects</a></li>
          <li><a onClick={() => handleTabClicks('Documents')} className={activeTab === 'Documents' ? 'activeTab' : ''}>Documents</a></li>
        </ul>
        {activeContent}
      </div>
    </div>
  )
}

export default Profile