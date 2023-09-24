import React from 'react'
import "./Button.css"

const Button = ({ text, style, className }) => {

    const buttonStyle = {
        ...style
    };

    const combinedClassNames = `button-style custom-button ${className}`;

    return (
        <button style={buttonStyle} className={combinedClassNames}>
            {text}
        </button>
    )
}

export default Button
