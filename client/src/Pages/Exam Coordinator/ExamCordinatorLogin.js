import React from 'react'
import '../Exam Coordinator/ExamCoordinator.css'
function ExamCordinatorLogin() {
  return (
    <div className='row mt-5 pt-5'>
        <div className='col-2'></div>
        <div className='col-8'>
            <div className='examcoordinator-login-divbox'>
              <div className='text-center mt-5'>
                <h2><b className='examcoordinator-login-b'>Exam Coordinator,</b> <span  className='examcoordinator-login-h2'>Log in !</span></h2>
              </div>
              <div className='text-center'>
                  <div className='mt-5'>
                    <input type='text'
                    className='examcoordinator-login-textbox ps-3'
                    placeholder='UserName'
                    />
                  </div>
              </div>
              <div className='text-center'>
                  <div className='mt-4'>
                    <input type='text'
                    className='examcoordinator-login-textbox ps-3'
                    placeholder='Password'
                    />
                  </div>
              </div>
              <div className='text-center'>
                  <div className='mt-4'>
                    <input type='text'
                    className='examcoordinator-login-textbox ps-3'
                    placeholder='Enter Captcha'
                    />
                  </div>
              </div>
              <div className='text-center mt-4'>
                <button className='examcoordinator-login-loginbtn'>Login</button>
              </div>
              <div className='text-center mt-4'>
                <button className='examcoordinator-login-cancelbtn'>Cancel</button>
              </div>
            </div>
        </div>
        <div className='col-2'></div>
    </div>
  )
}

export default ExamCordinatorLogin
