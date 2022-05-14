import React, { useState, useEffect } from 'react';

const Contact = () => {

    const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });

    const contactUser = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        contactUser();
    }, []);


    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({ ...userData, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const { name, email, phone, message } = userData;

        const res = await fetch('/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        });

        const data = await res.json();

        if(!data){
            console.log("Message not Sent");
        }else{
            alert("Message Sent");
            setUserData({...userData, message:""});
        }

    }


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 offset-lg-1'>
                        <div className='container mt-5  mt-5'>
                            <h3>Get In Touch</h3>
                        </div>
                        <form method='POST'>
                            <div className='d-flex justify-content-between align-items-between mt-5'>
                                <input type="text" className="form-control mr-2" id="name" placeholder='Your Name' name='name' value={userData.name} readOnly />
                                <input type="email" className="form-control mr-2" id="email" placeholder='Your Email' name='email' value={userData.email} readOnly />
                                <input type="number" className="form-control mr-2" id="number" placeholder='Your Mobile Number' name='phone' value={userData.phone} readOnly />
                            </div>
                            <div className='mt-5'>
                                <textarea className='form-control' placeholder='Message' cols='30' rows='10' name='message' value={userData.message} onChange={inputHandler}></textarea>
                            </div>
                            <div className='mt-3'>
                                <button type='submit' className="btn btn-primary" onClick={submitHandler}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;