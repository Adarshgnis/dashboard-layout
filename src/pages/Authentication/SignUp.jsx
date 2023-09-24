import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        const loginObj = {
            "userName": username,
            "password": password
        }

        console.log(JSON.stringify(loginObj))
        localStorage.setItem('userName', username);
        localStorage.setItem('password', password);

        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
    };

    useEffect(() => {

    }, [])

    return (
        <div className='login-container'>
            <div className="login-wrapper">
                <h1>Sign Up</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleSignup}>Sign Up</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
}

export default Signup;
