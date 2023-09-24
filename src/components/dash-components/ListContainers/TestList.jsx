import React from 'react'
import './TestList.css'

const TestList = () => {
  return (
    <div className='testList-container'>
        <ul className='testList-wrapper'>
          <li className='secondaryHeading1'>Today</li>
          <li className='secondaryHeading1'>Week</li>
          <li className='secondaryHeading1'>Month</li>
        </ul>
        <p className='testList-containerP'>No Records Found</p>
    </div>
  )
}

export default TestList