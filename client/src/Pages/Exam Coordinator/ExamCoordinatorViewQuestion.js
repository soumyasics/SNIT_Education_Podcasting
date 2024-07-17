import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
function ExamCoordinatorViewQuestion() {
  return (
    <div >
        <div className='ms-5 ps-1 '>
            <Link to='/examcoordinateviewrequest' className='view-question-icon'>
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
                <div className='text-center'>
                    <button className='view-question-approvebtn'>Approve</button>
                    <button className='view-question-rejectbtn ms-5'>Reject</button>
                </div>
            </div>
            <div className='col-1'></div>
        </div>
    </div>
  )
}

export default ExamCoordinatorViewQuestion
