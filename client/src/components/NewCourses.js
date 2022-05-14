import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';


const NewCourses = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const enrollHandler = (e) => {
        e.preventDefault();
        setShow(true)
    }


    const [userData, setUserData] = useState({ cnic: "", rollnum: "", course: ""});

    const enrollform = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUserData({ ...userData, cnic: data.cnic, rollnum: data.rollnum });

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        enrollform();
    }, []);


    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({ ...userData, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const { cnic, rollnum, course } = userData;

        const res = await fetch('/courses', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cnic, rollnum, course
            })
        });

        const data = await res.json();
        console.log(data);

        if (!data) {
            console.log("Form not Sent");
        } else {
            alert("Form Sent");
            setUserData({ ...userData, course: "" });
        }

    }
    return (
        <>
            <h2>New Courses</h2>
            <div className="row row-cols-1 row-cols-md-2">

                <div className="col mb-4">
                    <div className="card">
                        <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className='h5 text-muted'>Rs.200.00</p>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={enrollHandler}>Enroll Now</button>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className='h5 text-muted'>Rs.400.00</p>
                        </div>
                        <button type="submit" className="btn btn-primary " onClick={enrollHandler}>Enroll Now</button>

                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <p className='h5 text-muted'>Rs.600.00</p>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={enrollHandler}>Enroll Now</button>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className='h5 text-muted'>Rs.800.00</p>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={enrollHandler}>Enroll Now</button>
                    </div>
                </div>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>CNIC</Form.Label>
                            <Form.Control type="number" placeholder="Enter Your CNIC Number Without Hypens" value={userData.cnic} readOnly/>
                            <Form.Text className="text-muted">
                                We'll never share your CNIC number with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Roll Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter Your Roll Number" value={userData.rollnum} readOnly/>
                            <Form.Text className="text-muted">
                                We'll never share your roll number with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Course</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Selected Course Name"  onChange={inputHandler}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit' onClick={submitHandler}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NewCourses;