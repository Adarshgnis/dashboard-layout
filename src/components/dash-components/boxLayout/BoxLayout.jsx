import React from 'react'
import './BoxLayout.css'

const BoxLayout = ({ headerText, childComponent, backgroundColor, childDescription, learnMore }) => {

    const boxLayoutStyle = {
        background: backgroundColor
    };

    return (
        <div className='boxLayout-container'>
            <div className="boxLayout-wrapper">
                <div className="boxLayout-header" style={boxLayoutStyle}>
                    <h1 className='heading1'>{headerText}</h1>
                </div>
                <div className="boxLayout-body">
                    <p>{childDescription} <span> {learnMore}</span></p>
                    {childComponent}
                </div>
            </div>
        </div>
    )
}

export default BoxLayout
