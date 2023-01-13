import React, {useState} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        
    }
    const register = e =>{
        e.preventDefault();
        
    }
    return (
        <div className = 'login'>
            <Link to = '/'>
            <img 
                className = "login__logo" 
                src= 'https://www.bing.com/th?id=OIP.3ZJg2P-fzfHw3pjJyUJMuQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'/>
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type = 'text' value = {email} onChange = 
                    {e=> setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type = 'password' value = {password} onChange = 
                    {e=> setPassword(e.target.value)}/>

                    <button type= 'submit' onClick = {signIn}
                    className='login__signInButton'>Sign In</button>
                </form>
                <p>By Signing-in you agree to AMAZON CLONE Conditions of Use & Sale. Please see our Privacy Notice, our cookies Notice and our Interest-Based Ads Notice</p>
                
                <button onClick={register}
                className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

 export default Login
