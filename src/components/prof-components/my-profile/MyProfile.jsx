import React from 'react'
import PersonalInfo from './myprofile-components/PersonalInfo'
import EmergencyContact from './myprofile-components/EmergencyContact'
import BankInfo from './myprofile-components/BankInfo'
import FamilyInfo from './myprofile-components/FamilyInfo'
import EducationInfo from './myprofile-components/EducationInfo'
import Experience from './myprofile-components/Experience'
import './MyProfile.css'

const MyProfile = () => {
  return (
    <div className='myProfile-container'>
      <PersonalInfo/>
      <EmergencyContact />
      <BankInfo />
      <FamilyInfo />
      <EducationInfo />
      <Experience />
    </div>
  )
}

export default MyProfile
