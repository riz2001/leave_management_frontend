import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>

            <div class="alert alert-primary" role="alert">
                <center><b><h3>
                    Welcome To Leave Management App Of MCA Department
                </h3></b></center>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div class="d-grid gap-2 col-6 mx-auto">
                                <br></br>
                                <br></br>
                                <br></br>

                                <Link class="btn btn-danger" to="/HodSignIn" role="button"><h3>HOD LOGIN</h3></Link>
                                <br></br>
                                <Link class="btn btn-primary" to="/facultylogin" role="button"><h3>FACULTY LOGIN</h3></Link>
                                <br></br>
                                <Link class="btn btn-primary" to="studlogin" role="button"><h3>STUDENT LOGIN</h3></Link>
                                <br></br>
                                <center>
                                <p><h3>NEW STUDENTS FOR SIGN UP</h3> <center><Link to="/studsignup"><h4>Click Here</h4></Link></center></p>
                                </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage