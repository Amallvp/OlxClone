import React, { useContext,useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';

import { FirebaseContext } from '../../store/Context';
import "firebase/compat/auth";
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate()
const [email,setEmail] =useState('')
const [password,setPassword]= useState('')
const { firebase } = useContext(FirebaseContext)

const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{

        navigate('/')

    }).catch((error)=>{

        alert(error.message)
    })

}

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            defaultValue="John"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name={password}
            defaultValue="Doe"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;