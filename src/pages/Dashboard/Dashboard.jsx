import React from 'react'
import './Dashboard.css'
import DashboardStats from '../../components/dash-components/DashboardStats'
import AvailableBatches from '../../components/dash-components/Batches/AvailableBatches'
import JoinedBatches from '../../components/dash-components/Batches/JoinedBatches'
import ProjectBudget from '../../components/dash-components/Budget-task/ProjectBudget'
import ProjectTask from '../../components/dash-components/Budget-task/ProjectTask'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="dashboard-wrapper">
        <h1 className='heading1'>Hi, Welcome Matriyeeee Software</h1>
        <p className='profilewrapperP'>Dashboard</p>
        <DashboardStats/>
        <div className="batches-group">
          <AvailableBatches/>
          <JoinedBatches />
        </div>
        <div className="project-task">
          <ProjectBudget />
          <ProjectTask />
        </div>
      </div>
    </div>
  )
}

export default Dashboard