import React from 'react'
import data from "../../../../data/Data.json"

const Experience = () => {

  const experience = data.experience

  return (
    <div className='container-child'>
      <div className="child-wrapper timeline">
        <h2 className="editableContainer-heading">Experience</h2>
        <ul>
          {experience.map((exe, index) => (
            <li key={index}>
              <h4 className='secondaryHeading'>{exe.designationCompany}</h4>
              <p className='secondaryParagraph'>{exe.duration}</p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Experience
