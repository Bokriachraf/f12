import React, { useState } from 'react'
import Link from 'react-router-dom';
import { signin } from '../actions/userActions';
import { useSelector,useDispatch } from 'react-redux';
export default function SigninScreen(props) {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()


    const redirect = props.location.search ? props.location.search.split('=')[1] : '/'
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    }
    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect)
        }
    },[props.history, redirect, userInfo])
  return (
    <div>
        <form className='form' onSubmit={submitHandler}>
            <div>
                <h1>Sign in</h1>
            </div>
            <div>
                <label htmlFor="email">Email adress</label>
                <input 
                type="email"
                id="email"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
                ></input>
            </div>
            <div>
            <label htmlFor="password">Password</label>
                <input 
                type="password"
                id="password"
                placeholder="Enter password"
                required
                onChange={(e) => setPassword(e.target.value)}
                ></input>
            </div>
            <div>
                <button className='primary' type="submit">Sign In</button>
            </div>
            <div>
                New customer? {' '}
                <Link to="/register">Create your account</Link>
            </div>
        </form>
    </div>
  )
}
