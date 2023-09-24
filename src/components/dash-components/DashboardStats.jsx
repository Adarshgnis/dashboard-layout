import React from 'react'
import "./DashboardStats.css"
import data from '../../data/Data.json'

const DashboardStats = () => {

  const dashboardStats = data.dashboardStats

  return (
    <div className="dashboardStats-container">
      <div className='dashboardStats-wrapper'>
        {Object.entries(dashboardStats).map(([category, stats]) => (
          <div key={category}>
            <h3>{category}</h3>
            {Object.entries(stats).map(([statName, value]) => (
              <div className='clildPara' key={statName}>
                <p>{statName}</p>
                <p>{value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default DashboardStats
