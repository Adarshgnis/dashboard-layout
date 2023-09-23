import React from 'react'
import PersonalInfo from './myprofile-components/personalInfo'
import EmergencyContact from './myprofile-components/emergencyContact'
import BankInfo from './myprofile-components/bankInfo'
import FamilyInfo from './myprofile-components/familyInfo'
import EducationInfo from './myprofile-components/educationInfo'
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
