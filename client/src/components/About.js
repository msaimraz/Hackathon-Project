import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const About = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            navigate('/signin');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <>
            <div className='container'>
                <form method='GET'>
                    <div className='row'>
                        <div className='col-md-4 bg-danger'>
                            {/* <img src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' alt='demo' /> */}
                        </div>
                        <div className='col-md-6'>
                            <h5>{userData.name}</h5>
                            <h6>{userData.work}</h6>
                            <p className='mt-3 mb-5'>Ranking <span>1/10</span></p>

                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls='home' aria-selected='true'>About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls='profile' aria-selected='false'>Timeline</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-2'>
                            <input type="submit" className='btn' name='editbtn' value="Edit Profile" />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <p>WORK LINK</p>
                            <a href='https://www.youtube.com' target="_blank">Youtube</a> <br />
                            <a href='https://www.youtube.com' target="_blank">Facebook</a> <br />
                            <a href='https://www.youtube.com' target="_blank">Instagram</a> <br />
                            <a href='https://www.youtube.com' target="_blank">Twitter</a> <br />
                            <a href='https://www.youtube.com' target="_blank">Github</a> <br />
                        </div>
                        <div className='col-md-8 pl-5'>
                            <div className='tab-content' id='myTabContent'>
                                <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>User ID</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p> {userData._id}</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>Name</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>{userData.name}</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>Email</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p> {userData.email}</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>Phone</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p> {userData.phone}</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>Profession</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p> {userData.work}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='tab-pane' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>User ID</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p> 123456</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>Name</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p> M.Saim</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>Email</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p> 123456</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label>Profession</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p> 123456</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}

export default About;