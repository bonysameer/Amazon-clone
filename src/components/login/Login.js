import React, { useState } from 'react';
import './login.css';
import AMAZONLOGO from '../../assets/Amazon_logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
// import { auth } from '../../firebase';
// import {auth} from '../../firebase';


const Login = () => {

   const history = useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const signIn = e => {
      e.preventDefault()

      auth
         .signInWithEmailAndPassword(email, password)
         .then(auth => {
         history("/")
      })
      .catch(error => alert(error.message))
   }

   const register = e => {
      e.preventDefault()

      auth
         .createUserWithEmailAndPassword(email,password)
         .then((auth) => {
            console.log(auth);
            if(auth){
               history("/")
            }
         })
         .catch(error => alert(error.message))
   }

  return (
   
   <div className='login'>
      <Link to='/'>
        <img className='login__logo' src={AMAZONLOGO} alt='amazon logo'/>
      </Link>

      <div className='login__container'>
         <h1>Sign In</h1>

         <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

            <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
         </form>

            <p>
               By signing in you agree to the AMAZON CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Intrest_Based Ads Notice.
            </p>
            <button className='login__registerButton' type='submit' onClick={register}>Create your Amazon Account</button>
      </div>
   </div>
  

  )
}

export default Login