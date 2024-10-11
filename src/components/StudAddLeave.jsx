import React, { useState } from 'react';
import axios from 'axios';

const AddLeave = () => {
    const [data, setData] = useState({
        name: "",
        batch: "",
        rollno: "",
        Sdate: "",
        Edate: "",
        Tdate: "",
        reasonforleave: "",
        file: null // Add file to state
    });

    // Input handler for text data
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    // Input handler for file data
    const fileHandler = (event) => {
        setData({ ...data, file: event.target.files[0] }); // Set file state
    };

    // Form submission handler
    const readValue = () => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("batch", data.batch);
        formData.append("rollno", data.rollno);
        formData.append("Sdate", data.Sdate);
        formData.append("Edate", data.Edate);
        formData.append("Tdate", data.Tdate);
        formData.append("reasonforleave", data.reasonforleave);
        formData.append("file", data.file); // Append file

        axios.post("http://localhost:8080/studaddleave", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => {
            console.log(response.data);
            if (response.data.status === "success") {
                alert("Leave request added successfully!");
            } else {
                alert("Failed to add leave request");
            }
        }).catch(error => {
            console.error("Error uploading data:", error);
        });
    };

    return (
        <div>
            <div className="alert alert-primary" role="alert">
                <center><b><h3>FILL YOUR LEAVE FORM</h3></b></center>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row g-4">
                            {/* Form fields */}
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="name" className="form-label">Enter Your Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="batch" className="form-label">Enter Your Batch</label>
                                <select name="batch" value={data.batch} onChange={inputHandler} className="form-control">
                                    <option value="" disabled>Select a batch</option>
                                    <option>A</option>
                                    <option>B</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="Sdate" className="form-label">Enter the Starting Date Of Your Leave</label>
                                <input type="date" name="Sdate" value={data.Sdate} onChange={inputHandler} className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="Edate" className="form-label">Enter the Ending Date Of Your Leave</label>
                                <input type="date" name="Edate" value={data.Edate} onChange={inputHandler} className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="rollno" className="form-label">Enter Your Roll No</label>
                                <input type="text" name="rollno" value={data.rollno} onChange={inputHandler} className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="Tdate" className="form-label">Todays Date</label>
                                <input type="date" name="Tdate" value={data.Tdate} onChange={inputHandler} className="form-control" />
                            </div>
                            <div className="col col-12">
                                <label htmlFor="reasonforleave" className="form-label">Reason For Your Leave</label>
                                <textarea name="reasonforleave" value={data.reasonforleave} onChange={inputHandler} className="form-control"></textarea>
                            </div>
                            <div className="col col-12">
                                <label htmlFor="file" className="form-label">Upload Supporting Document/Image</label>
                                <input type="file" className="form-control" name="file" onChange={fileHandler} />
                            </div>
                            <div className="col col-12">
                                <button className="btn btn-success" onClick={readValue}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddLeave;
