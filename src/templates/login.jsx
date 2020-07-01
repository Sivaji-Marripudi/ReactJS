import * as React from 'react';
import './login.css';
function Login() {
    return (
        <div className = 'login-card'> 
            <h2> Login Form : </h2><br></br>
            <label>Email :</label>
            <input/>
            <br></br>
            <br></br>
            <label>Password :</label> 
            <input/> <br></br>
            <br></br>

            <button>Login</button>
        </div>

    )
        
}
export default Login;