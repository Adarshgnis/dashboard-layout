import React from 'react'
import './EducationInfo.css'
import data from "../../../../data/Data.json"

const EducationInfo = () => {

  const educationData = data.educationData;

  return (
    <div className='container-child '>
      <div className="child-wrapper timeline">
        <h2 className="editableContainer-heading">Education Information</h2>
        <ul>
          {educationData.map((edu, index) => (
            <li key={index}>
              <h4 className='secondaryHeading'>{edu.school}</h4>
              <p className='secondaryParagraph'>{edu.degree}</p>
              <p className='secondaryParagraph'>{edu.duration}</p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default EducationInfo