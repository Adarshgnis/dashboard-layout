import React, { useState } from 'react'
import './JoinedBatches.css'
import Dropdown from '../../CallToActionComponents/Dropdown'
import SearchBar from '../../CallToActionComponents/SearchBar'
import data from '../../../data/Data.json'

const JoinedBatches = () => {

  const tableHeaders = Object.keys(data.Joinedbatches[0])

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  }

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const [selectedNumber, setSelectedNumber] = useState(5);

  const handleNumberChange = (e) => {
    setSelectedNumber(parseInt(e.target.value));
  };



  return (
    <div className='joinedBatches-container box-container'>
      <h2 className="box-container-heading">Joined Batches</h2>
      <div className='dropSearch-group'>
        <Dropdown
          value={selectedNumber}
          onChange={handleNumberChange}
          min={1}
          max={10}
          step={1} />
        <SearchBar
          value={searchQuery}
          onChange={handleQueryChange}
          onSearch={handleSearch}
        />
      </div>
      <table className='dashboardTable'>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th className='secondaryHeading' key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.Joinedbatches.map((member, index) => (
            <tr key={index}>
              {tableHeaders.map((header, innerIndex) => (
                <td className='editCont-p' key={innerIndex}>{member[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JoinedBatches
