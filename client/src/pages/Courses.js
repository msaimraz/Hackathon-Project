import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EnrolledCourses from '../components/EnrolledCourses'
import NewCourses from '../components/NewCourses'

const Courses = () => {

    
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try {
            const res = await fetch('/courses', {
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
            <div className='container my-5'>
                <EnrolledCourses />
            </div>
            <div className='container my-5'>
                <NewCourses />
            </div>


        </>
    )
}

export default Courses