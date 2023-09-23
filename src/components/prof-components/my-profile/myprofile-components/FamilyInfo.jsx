import React from 'react'
import data from "../../../../data/Data.json"
import "./FamilyInfo.css"

const FamilyInfo = () => {

  const tableHeaders = Object.keys(data.familyData[0])

  return (
    <div className='container-child'>
      <div className="child-wrapper">
        <h2 className="editableContainer-heading">Family Information</h2>
        <table className='editableContainerTable'> 
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th className='secondaryHeading' key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.familyData.map((member, index) => (
              <tr key={index}>
                {tableHeaders.map((header, innerIndex) => (
                  <td className='editCont-p' key={innerIndex}>{member[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default FamilyInfo