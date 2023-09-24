import React, { useState } from 'react'
import "./AvailableBatches.css"
import Dropdown from '../../CallToActionComponents/Dropdown'
import SearchBar from '../../CallToActionComponents/SearchBar';
import Button from '../../CallToActionComponents/Button';
import data from '../../../data/Data.json'
import PaginationGroup from '../../CallToActionComponents/PaginationGroup';

const AvailableBatches = () => {

  const customStyle = {
    borderRadius: '3px',
    background: 'linear-gradient(99deg, #0CD5F5 2.86%, #0458BA 100%)',
    padding : '8px 28px 9px 27px',
    fontSize : '0.625rem',
    fontWeight : '500',
    color : '#fff',
    outline : 'none',
    border : 'none'
  };

  const tableHeaders = Object.keys(data.batches[0])

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
    <div className='availableBatch-container box-container'>
      <h2 className="box-container-heading">Available Batches</h2>
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
              <th className='secondaryHeading'>action</th>
          </tr>
        </thead>
        <tbody>
          {data.batches.map((member, index) => (
            <tr key={index}>
              {tableHeaders.map((header, innerIndex) => (
                <td className='editCont-p' key={innerIndex}>{member[header]}</td>
              ))}
              <td>
                <Button text="Join" style={customStyle}/> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationGroup/>
    </div>
  )
}


export default AvailableBatches
