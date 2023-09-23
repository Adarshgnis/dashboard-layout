import React from 'react'
import './BankInfo.css'
import data from "../../../../data/Data.json"

const BankInfo = () => {

  const bankInfo = data.bankInfo

  return (
    <div className='container-child'>
      <div className="child-wrapper">
        <h2 className="editableContainer-heading">Bank Informations</h2>
        {Object.entries(bankInfo).map(([key, value]) => (
          <div className='parentDiv' key={key}>
            <div className='child1'>
              <p className='editCont-p'>{key}</p>
              <p className='editCont-p'>:</p>
            </div>
            <div className='child20'>
              <p className='editCont-p'>{value}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default BankInfo