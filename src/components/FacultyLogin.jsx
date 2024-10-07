import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FacultyLogin = () => {
    let navigate=useNavigate()
    const [data, setData] = useState(
        {
            "faculty_username": "",
            "faculty_password": ""
        }
    )

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        axios.post("http://localhost:8080/facultylogin", data)
            .then(
                (response) => {
                    if (response.data.status == "success") {
                        navigate("/facultyaddleave")
                    } else {
                        if(response.data.status == "User Not Found")
                            {
                                alert("UserName Does Not Exists")
                            }
                            else{
                                alert("Incorrect Password")
                            }
                    }
                }
            ).catch(
                (error) => {
                    alert(error.message)
                })
    }

    return (
        <div>

            <div class="alert alert-primary" role="alert">
                <center><b><h3>
                    FACULTY LOGIN
                </h3></b></center>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div class="card w-50 mx-auto border-rounded text-bg-light border-info">
                            <div class="card-body">
                                <div className="row g-4">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Enter your Email</label>
                                        <input type="text" className="form-control"name="faculty_username" value={data.faculty_username} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Enter your Password</label>
                                        <input type="password" name="faculty_password" id="" className="form-control" value={data.faculty_password} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <center>
                                            <button className="btn btn-success" onClick={readValue}>Login</button>
                                            <br /><br /><Link to="/"> Back to home page</Link>
                                        </center>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default FacultyLogin