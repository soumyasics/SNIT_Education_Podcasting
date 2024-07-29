import React, { useEffect, useState } from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import axiosInstance from '../../Baseurl'

function ViewAllQuestion() {

    const[data,setData]=useState({})

    useEffect(() => {
        axiosInstance.post(`getAllQuestions`,data)
        .then((res) => {
            if(res.data.status == 200){
                console.log("View Successfully");
                setData()
            }
        })
        .catch((err) => {
            console.log(err);
        })
    })
  return (
    <div >
        <div className='ms-5 ps-1 '>
            <Link to='/examcoordinateviewall' className='view-question-icon'>
                <IoArrowBackOutline />
            </Link>
        </div>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-10 view-request-divbox'>
                <div className='text-center mt-4'>
                    <h4>Python</h4>
                </div>
                <div className='ms-5'>
                    <h5>Question 1</h5>
                    <p>Which of the following is a mutable data type in Python?</p>
                    <p>A.Tuple</p>
                    <p>B.List</p>
                    <p>C.String</p>
                    <p>D.Integer</p>
                    <p>Answer: B.List</p>
                </div>
                <div className='ms-5'>
                    <h5>Question 2</h5>
                    <p>Which of the following is a mutable data type in Python?</p>
                    <p>A.Tuple</p>
                    <p>B.List</p>
                    <p>C.String</p>
                    <p>D.Integer</p>
                    <p>Answer: B.List</p>
                </div>
            </div>
            <div className='col-1'></div>
        </div>
    </div>
  )
}

export default ViewAllQuestion
