import React from 'react'
import data from "../../../../data/Data.json"
import "./PersonalInfo.css"

const PersonalInfo = () => {

  const personalInfo = data.personalInfo

  return (
    <div className='container-child'>
      <div className="child-wrapper">
        <h2 className="editableContainer-heading">Personal Informations</h2>

        {Object.entries(personalInfo).map(([key, value]) => (
          <div className='parentDiv' key={key}>
            <div className='child1'>
              <p className='editCont-p'>{key}</p>
              <p className='editCont-p'>:</p>
            </div>
            <div className='child2'>
              <p className='editCont-p'>{value}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default PersonalInfo