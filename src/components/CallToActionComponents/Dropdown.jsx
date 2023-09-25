import React from 'react'
import './Dropdown.css'

const Dropdown = ({ value, onChange, min, max, step }) => {

    const options = []

    for (let i = min; i <= max; i += step) {
        options.push(i)
    }

    return (
        <div className='select-wrapper'>
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <img src="/assets/Component 19.png" alt="" />
        </div>
    )
}

export default Dropdown
