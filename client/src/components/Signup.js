import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        cnic: "", rollnum: "", password: ""
    });

    let name, value;
    const inputHandler = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const { cnic, rollnum, password } = user;

        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cnic, rollnum, password
            })
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successfull");
            console.log("Registration Successfull");
            navigate('/signin');
        }
    };


    return (
        <>
            <section>
                <div className='container mt-5'>
                    <div className='container mt-5 text-center'>
                        <h2>Signup</h2>
                    </div>
                    <form method='POST'>
                        <div className="form-group">
                            <label htmlFor='cnic'>CNIC</label>
                            <input type="number" className="form-control" name='cnic' id='cnic' autoComplete='off' value={user.cnic} onChange={inputHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='rollnum'>Roll Number</label>
                            <input type="number" className="form-control" name='rollnum' id='rollnum' autoComplete='off' value={user.rollnum} onChange={inputHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='password'>Password</label>
                            <input type="password" className="form-control" name='password' id='password' autoComplete='off' value={user.password} onChange={inputHandler} />
                        </div>
                        <input type="submit" className="btn btn-primary" name='signup' id='signup' value="Signup" onClick={submitHandler} />
                    </form>
                    <div className='container text-center m-3'>
                        <NavLink to="/signin" className="h6">I am already register</NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;