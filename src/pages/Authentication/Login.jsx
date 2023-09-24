import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const savedUsername = localStorage.getItem('userName');
        if (username === savedUsername) {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/dashboard');
            console.log("true")
        }
    };

    return (
        <div className='login-container'>
            <div className="login-wrapper">
                <h1>Log In</h1>
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
                <button onClick={handleLogin}>Log In</button>
                <p>Don't have an account? <Link to="/signup">Signup</Link></p>
            </div>
        </div>
    );
}

export default Login;
