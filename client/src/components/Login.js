import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {

    const { state, dispatch } = useContext(UserContext);

    const navigate = useNavigate();
    const [rollnum, setRollNum] = useState('');
    const [password, setPassword] = useState('');

    const signinHandler = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rollnum,
                password
            })
        });

        const data =  res.json();

        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials");
        } else {
            dispatch({ type: 'USER', payload: true })
            window.alert("Login Successfull");
            navigate('/');
        }
    }
    return (
        <>
            <section>
                <div className='container mt-5'>
                    <div className='container mt-5 text-center'>
                        <h2>Sign In</h2>
                    </div>
                    <form method='POST'>
                        <div className="form-group">
                            <label htmlFor='rollnum'>Roll Number</label>
                            <input type="number" className="form-control" name='rollnum' id='rollnum' autoComplete='off' value={rollnum} onChange={(e) => setRollNum(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='password'>Password</label>
                            <input type="password" className="form-control" name='password' id='password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <input type="submit" className="btn btn-primary" name='signup' id='signup' value="Signin" onClick={signinHandler} />
                    </form>
                    <div className='container text-center m-3'>
                        <NavLink to="/signup" className="h6">Create an Account</NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login