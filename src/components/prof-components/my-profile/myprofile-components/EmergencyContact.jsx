import React from 'react'
import "./EmergencyContact.css"

const EmergencyContact = () => {
  return (
    <div className='container-child'>
      <div className="child-wrapper">
        <h2 className="editableContainer-heading">Emergency Contact</h2>
        <p className='secondaryHeading'>Primary</p>
        <ul>
          <li className='secondaryParagraph'>Name</li>
          <li className='secondaryParagraph'>Relationship</li>
          <li className='secondaryParagraph'>Phone</li>
        </ul>
        <hr />
        <p className='secondaryHeading'>Secondary</p>
        <ul>
          <li className='secondaryParagraph'>Name</li>
          <li className='secondaryParagraph'>Relationship</li>
          <li className='secondaryParagraph'>Phone</li>
        </ul>
      </div>

    </div>
  )
}

export default EmergencyContact