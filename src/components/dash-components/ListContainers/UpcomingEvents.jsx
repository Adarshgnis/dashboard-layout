import React from 'react'
import './UpcomingEvents.css'

const UpcomingEvents = () => {
  return (
    <div>
      <div className="upcomingEvents-wrapper">
        <div className="upcomingEvents-section">
          <div className="upcomingEvents-sectionLeft">
            <h4 className='secondaryHeading1'>PH World Mall Lantern Festival</h4>
            <p className='lightParagraph'>8AM - 4PM Bay Area, San Francisco</p>
            <p className='lightParagraph'><span className='stockColor'>Sold Out</span> (3000 tickets sold)</p>
          </div>
          <div className="upcomingEvents-sectionRight">
            <p className='lightParagraph'>NOV 20 TUESDAY</p>
          </div>
        </div>
        <div className="upcomingEvents-section">
          <div className="upcomingEvents-sectionLeft">
            <h4 className='secondaryHeading1'>PH World Mall Lantern Festival</h4>
            <p className='lightParagraph'>8AM - 4PM Bay Area, San Francisco</p>
            <p className='lightParagraph'><span className='stockColor'>Sold Out Soon</span> (3000 tickets sold)</p>
          </div>
          <div className="upcomingEvents-sectionRight">
            <p className='lightParagraph'>NOV 20 TUESDAY</p>
          </div>
        </div>
        <div className="upcomingEvents-section">
          <div className="upcomingEvents-sectionLeft">
            <h4 className='secondaryHeading1'>PH World Mall Lantern Festival</h4>
            <p className='lightParagraph'>8AM - 4PM Bay Area, San Francisco</p>
            <p className='lightParagraph'><span className='stockColor'>Free Registeration</span> (3000 tickets sold)</p>
          </div>
          <div className="upcomingEvents-sectionRight">
            <p className='lightParagraph'>NOV 20 TUESDAY</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents