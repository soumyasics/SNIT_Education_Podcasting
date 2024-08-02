import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import image from '../../Assest/Group 2151.png'

function ExamReportDetail() {
  return (
    <div>
        <div className='ms-5'>
            <Link to='/createrviewreport '>
                <IoMdArrowBack className='exam-report-detail-icon' />
            </Link>
        </div>
        <div className='text-center'>
            <label className='exam-report-detail-divbox '>
                <img src={image} className='exam-report-detail-img mt-3'/>
                    <div className='row'>
                        <div className='col-3'>
                            <div>
                                <label className='mt-2'>Name</label>
                            </div>
                            <div>
                                <label className='mt-2'>Podcast Name</label>
                            </div>
                        </div>
                        <div className='col-1'>
                            <div>
                                <label className='mt-2'>:</label>
                            </div>
                            <div>
                                <label  className='mt-2'>:</label>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div>
                                    <label className='mt-2'>Ahana Malik</label>
                                </div>
                                <div>
                                    <label  className='mt-2'>Python</label>
                                </div>
                            </div>
                        <div className='col-4 exam-report-detail-divbox2'>
                            <h6 className='pt-4'>Total Marks</h6>
                            <h5 className='text-center'>75%</h5>
                        </div>
                    </div>
            </label>  
        </div>
        <div className='row'>
            <div className='col-3'></div>
            <div className='col-5'>
                <div className='row'>
                    <div className='col-8 mt-3 ps-5 ms-5'>
                        <div>
                            <b >Total Number of Questions</b>
                        </div>
                        <div>
                            <b>Total Number of Questions attended</b>
                        </div>
                    </div>
                    <div className='col-1 mt-3'>
                        <div>
                            <b>:</b>
                        </div>
                        <div>
                            <b>:</b>
                        </div>
                    </div>
                    <div className='col-2 mt-3'>
                        <div>
                            <b>4</b>
                        </div>
                        <div>
                            <b>4</b>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-4'></div>
        </div>
        <div className='container ps-5'>
            <div className='mt-5'>
                    <h5>Question 1</h5>
                    <p className='mt-4'>Which of the following is a mutable data type in Python?</p>
                    <div>
                        <p>A.List</p>
                    </div>
                    <div className='listener-report-correctanswer'>
                        <p>B.String</p>
                    </div>
                    <div className='listener-report-wronganswer mt-2'>
                        <p>C.Integer</p>
                    </div>
                    <div>
                        <p>D.float</p>
                    </div>  
                </div>
                <div className='mt-5'>
                    <h5>Question 2</h5>
                    <p className='mt-4'>Which of the following is a mutable data type in Python?</p>
                    <div>
                        <p>A.List</p>
                    </div>
                    <div className='listener-report-correctanswer'>
                        <p>B.String</p>
                    </div>
                    <div className='listener-report-wronganswer mt-2'>
                        <p>C.Integer</p>
                    </div>
                    <div>
                        <p>D.float</p>
                    </div>  
                </div>
                <div className='mt-5'>
                    <h5>Question 3</h5>
                    <p className='mt-4'>Which of the following is a mutable data type in Python?</p>
                    <div>
                        <p>A.List</p>
                    </div>
                    <div className='listener-report-correctanswer'>
                        <p>B.String</p>
                    </div>
                    <div className='listener-report-wronganswer mt-2'>
                        <p>C.Integer</p>
                    </div>
                    <div>
                        <p>D.float</p>
                    </div>  
                </div>
        </div>
    </div>
  )
}

export default ExamReportDetail
