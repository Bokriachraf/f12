import React, { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen() {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const location = useLocation();
    const navigate = useNavigate();
    // const redirect = props.location.search ? props.location.search.split('=')[1] : '/'
    const redirect = location.search ? location.search.split('=')[1] : '/';
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error  } = userSignin;
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    }
    useEffect(() => {
        if(userInfo) {
            // props.history.push(redirect)
            navigate(redirect)
        }
    },[navigate, redirect, userInfo])
  return (
    <div>
        <form className='form' onSubmit={submitHandler}>
            <div>
                <h1>Sign in</h1>
            </div>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
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
                <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
            </div>
        </form>
    </div>
  )
}
