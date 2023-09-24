import React from 'react'
import "./ProjectTask.css"
import Button from '../../CallToActionComponents/Button'

const ProjectTask = () => {
  return (
    <div className='ProjectTask-container budgetTask-wrapper'>
      <div className="ProjectTask-wrapper">
        <h2 className="box-container-heading">Project & Task</h2>
        <p className="secondaryParagraph box-container-paragraph">In project, a task is an activity that needs to be accomplished within a
          defined period of time or by a deadline. Learn more</p>
        <div >
          <table className='projectTask-table'>
            <thead>
              <tr>
                <th>Project & Task</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='tableLabel'>Welcome Letter</td>
                <td><Button text="Completed" className="statusButton" style={{backgroundColor : "#18CE61"}}/></td>
              </tr>
              <tr>
                <td className='tableLabel'>Invoice</td>
                <td><Button text="pending" className="statusButton" style={{backgroundColor : "#E9B911"}}/></td>
              </tr>
              <tr>
                <td className='tableLabel'>Invoice</td>
                <td><Button text="Completed" className="statusButton" style={{backgroundColor : "#CE1839"}}/></td>
              </tr>
              <tr>
                <td className='tableLabel'>Certificate</td>
                <td><Button text="Completed" className="statusButton" style={{backgroundColor : "#0060EF"}}/></td>
              </tr>
              <tr>
                <td className='tableLabel'>Certificate</td>
                <td><Button text="Completed" className="statusButton" style={{backgroundColor : "#18CE61"}}/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProjectTask
