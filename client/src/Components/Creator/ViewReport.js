import React from 'react'
import image from '../../Assest/Group 2151.png'
import { Link } from 'react-router-dom'
function ViewReport() {
  return (
    <div>
        <div className='text-center'>
            <h3 className='add-question-h3'>
                Exam Report
            </h3>
        </div>
        <div className='row container mt-5 ms-5 text-center pt-3 view-question-back'>
            <div className='col'>
                <b>Profile</b>
            </div>
            <div className='col'>
                <b>Name</b>
            </div>
            <div className='col'>
                <b>PodCast Name</b>
            </div>
            <div className='col'>
                <b>Phone Number</b>
            </div>
            <div className='col'>
                <b>Email</b>
            </div>
            <div className='col'>
                <b>View Request</b>
            </div>
        </div>
        <div className='row container mt-4 ms-5 text-center  view-question-back'>
            <div className='col pt-2'>
                <img src={image} className='view-report-img'></img>
            </div>
            <div className='col pt-3'>
                <b>Ahana Malik</b>
            </div>
            <div className='col pt-3'>
                <b>Python</b>
            </div>
            <div className='col pt-3'>
                <b>7070707070</b>
            </div>
            <div className='col pt-3'>
                <b>ahanamalik@gmail.com</b>
            </div>
            <div className='col pt-3'>
                <Link to='/createrviewreportdetail'>
                    <button className='view-request-vqbtn'>VR</button>
                </Link>
            </div>
        </div>
        <div className='row container mt-4 ms-5 text-center  view-question-back'>
            <div className='col pt-2'>
                <img src={image} className='view-report-img'></img>
            </div>
            <div className='col pt-3'>
                <b>Ahana Malik</b>
            </div>
            <div className='col pt-3'>
                <b>Python</b>
            </div>
            <div className='col pt-3'>
                <b>7070707070</b>
            </div>
            <div className='col pt-3'>
                <b>ahanamalik@gmail.com</b>
            </div>
            <div className='col pt-3'>
                <button className='view-request-vqbtn'>VR</button>
            </div>
        </div>
        <div className='row container mt-4 ms-5 text-center  view-question-back'>
            <div className='col pt-2'>
                <img src={image} className='view-report-img'></img>
            </div>
            <div className='col pt-3'>
                <b>Ahana Malik</b>
            </div>
            <div className='col pt-3'>
                <b>Python</b>
            </div>
            <div className='col pt-3'>
                <b>7070707070</b>
            </div>
            <div className='col pt-3'>
                <b>ahanamalik@gmail.com</b>
            </div>
            <div className='col pt-3'>
                <button className='view-request-vqbtn'>VR</button>
            </div>
        </div>
        <div className='row container mt-4 ms-5 text-center  view-question-back'>
            <div className='col pt-2'>
                <img src={image} className='view-report-img'></img>
            </div>
            <div className='col pt-3'>
                <b>Ahana Malik</b>
            </div>
            <div className='col pt-3'>
                <b>Python</b>
            </div>
            <div className='col pt-3'>
                <b>7070707070</b>
            </div>
            <div className='col pt-3'>
                <b>ahanamalik@gmail.com</b>
            </div>
            <div className='col pt-3'>
                <button className='view-request-vqbtn'>VR</button>
            </div>
        </div>
        <div className='row container mt-4 ms-5 text-center  view-question-back'>
            <div className='col pt-2'>
                <img src={image} className='view-report-img'></img>
            </div>
            <div className='col pt-3'>
                <b>Ahana Malik</b>
            </div>
            <div className='col pt-3'>
                <b>Python</b>
            </div>
            <div className='col pt-3'>
                <b>7070707070</b>
            </div>
            <div className='col pt-3'>
                <b>ahanamalik@gmail.com</b>
            </div>
            <div className='col pt-3'>
                <button className='view-request-vqbtn'>VR</button>
            </div>
        </div>
    </div>
  )
}

export default ViewReport
