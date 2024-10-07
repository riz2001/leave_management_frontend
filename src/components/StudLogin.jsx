import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const StudLogin = () => {

    let navigate=useNavigate()
    const [data, setData] = useState(
        {
            "student_username": "",
            "student_password": ""
        }
    )

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        axios.post("http://localhost:8080/studlogin", data)
            .then(
                (response) => {
                    if (response.data.status == "success") {
                       navigate("/studaddleave")
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
                }
            )
    }

    return (
        <div>
            <div class="alert alert-primary" role="alert">
                <center><b><h3>
                    STUDENT LOGIN
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
                                        <input type="text" className="form-control" name='student_username' value={data.student_username} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Enter your Password</label>
                                        <input type="password" name="student_password" id="" className="form-control" value={data.student_password} onChange={inputHandler}/>
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

export default StudLogin