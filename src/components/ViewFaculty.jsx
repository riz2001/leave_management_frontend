import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewFaculty = () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8080/viewFaculty").then(
            (response) => {

                changeData(response.data)
            }
        )
    }
    useEffect(() => { fetchData() }, [])


    return (
        <div>

            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">ID No</th>
                                    <th scope="col">Leave Started From</th>
                                    <th scope="col">Leave Ended in</th>
                                    <th scope="col">Date of Submission</th>
                                    <th scope="col">Reason For Leave</th>
                                    

                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value, index) => {
                                        return <tr>
                                            <th scope="row">{value.name}</th>
                                            <td>{value.IdNo}</td>
                                            <td>{value.Sdate}</td>
                                            <td>{value.Edate}</td>
                                            <td>{value.Tdate}</td>
                                            <td>{value.reasonforleave}</td>
                                           
                                        </tr>
                                    }
                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ViewFaculty