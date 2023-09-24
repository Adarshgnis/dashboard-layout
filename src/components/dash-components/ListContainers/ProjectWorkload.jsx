import React from 'react'
import './ProjectWorkload.css'
import LoadingBar from '../../CallToActionComponents/LoadingBar'

const ProjectWorkload = () => {
  return (
    <div className='ProjectWorkload-parentDiv'>
      <div className="ProjectWorkload-parentSection">
        <div className="ProjectWorkload-childLeftSection">
          <p className='secondaryHeading1'>40.32%</p>
          <p className='lightParagraph'>External</p>
          <LoadingBar percent={40.32} color="#20F1FE"/>
        </div>
        <div className="ProjectWorkload-childRightSection">
          <p className='secondaryHeading1'>1,3,7,8,4,5,4,8,6</p>
        </div>
      </div>
      <div className="ProjectWorkload-parentSection">
        <div className="ProjectWorkload-childLeftSection">
          <p className='secondaryHeading1'>40.73%</p>
          <p className='lightParagraph'>External</p>
          <LoadingBar percent={40.73} color="#FF007A"/>
        </div>
        <div className="ProjectWorkload-childRightSection">
          <p className='secondaryHeading1'>1,3,7,8,4,5,4,8,6</p>
        </div>
      </div>
      <div className="ProjectWorkload-parentSection">
        <div className="ProjectWorkload-childLeftSection">
          <p className='secondaryHeading1'>50.12%</p>
          <p className='lightParagraph'>External</p>
          <LoadingBar percent={50.12} color="#57FF1C"/>
        </div>
        <div className="ProjectWorkload-childRightSection">
          <p className='secondaryHeading1'>1,3,7,8,4,5,4,8,6</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectWorkload