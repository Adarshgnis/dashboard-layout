import React from 'react'
import './Dashboard.css'
import DashboardStats from '../../components/dash-components/DashboardStats'
import AvailableBatches from '../../components/dash-components/Batches/AvailableBatches'
import JoinedBatches from '../../components/dash-components/Batches/JoinedBatches'
import ProjectBudget from '../../components/dash-components/Budget-task/ProjectBudget'
import ProjectTask from '../../components/dash-components/Budget-task/ProjectTask'
import TestList from '../../components/dash-components/ListContainers/TestList'
import BoxLayout from '../../components/dash-components/boxLayout/BoxLayout'
import ProjectWorkload from '../../components/dash-components/ListContainers/ProjectWorkload'
import UpcomingEvents from '../../components/dash-components/ListContainers/UpcomingEvents'
import OnGoingProjects from '../../components/dash-components/ListContainers/OnGoingProjects'
import Activity from '../../components/dash-components/ListContainers/Activity'
import TaskStats from '../../components/dash-components/ListContainers/TaskStats'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="dashboard-wrapper">
        <h1 className='heading1'>Hi, Welcome Matriyeeee Software</h1>
        <p className='profilewrapperP'>Dashboard</p>
        <DashboardStats />
        <div className="batches-group">
          <AvailableBatches />
          <JoinedBatches />
        </div>
        <div className="project-task">
          <ProjectBudget />
          <ProjectTask />
        </div>
        <div className="list-containers">
          <BoxLayout headerText="Test List" childComponent={<TestList />} backgroundColor="linear-gradient(90deg, #0ABCE8 0%, #131364 100%)" />
          <BoxLayout headerText="Project Workload" childComponent={<ProjectWorkload />} backgroundColor="linear-gradient(90deg, #4C36EE 0%, #141464 100%)" childDescription="In the Project Workload report, their remaining assignments, 
completion dates, whether their work is at-risk." learnMore = " Learn More"/>
          <BoxLayout headerText="Upcoming Events" childComponent={<UpcomingEvents />} backgroundColor="linear-gradient(90deg, #C30AE4 0%, #131366 100%)" childDescription="In the Project Workload report, their remaining assignments, 
completion dates, whether their work is at-risk." learnMore = " Learn More"/>
          <BoxLayout headerText="Top On-going Projects" childComponent={<OnGoingProjects />} backgroundColor="linear-gradient(90deg, #0ABCE8 0%, #131364 100%)" />
          <BoxLayout headerText="Activity" childComponent={<Activity />} backgroundColor="linear-gradient(90deg, #4C36EE 0%, #141464 100%)" childDescription="In the Project Workload report, their remaining assignments, 
completion dates, whether their work is at-risk." learnMore = " Learn More"/>
          <BoxLayout headerText="Task Statistics" childComponent={<TaskStats />} backgroundColor="linear-gradient(90deg, #C30AE4 0%, #131366 100%)" childDescription="In the Project Workload report, their remaining assignments, 
completion dates, whether their work is at-risk." learnMore = " Learn More"/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard