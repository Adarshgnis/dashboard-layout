import React from 'react'
import "./ProjectBudget.css"

const ProjectBudget = () => {
  return (
    <div className='projectBudget-container'>
      <div className="projectBudget-wrapper">
        <h2 className="box-container-heading">Project Budget</h2>
        <p className='secondaryParagraph box-container-paragraph'>The Project Budget is a tool used by project managers to estimate the total cost of a project.<br/>
          A project budget template includes a detailed estimate of all costs. Learn more</p>
        <div className="box-container budgetContainer">
          <p>Total Budget</p>
          <p>Amount Spent</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectBudget
