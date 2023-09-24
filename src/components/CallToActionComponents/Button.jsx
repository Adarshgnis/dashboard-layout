import React from 'react'
import "./Button.css"

const Button = ({ text, style }) => {

    const buttonStyle = {
        ...style
    };


    return (
        <button style={buttonStyle} className="custom-button">
            {text}
        </button>
    )
}

export default Button
