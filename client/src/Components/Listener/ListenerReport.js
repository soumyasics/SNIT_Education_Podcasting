import React from 'react'

function ListenerReport() {
  return (
    <div>
        <div className='container'>
            <select className='add-question-select ps-3'>
                <option>Select PodCast</option>
                <option>Sharik - Python</option>
                <option>Josna - Mern</option>
                <option>Ahana - Mean</option>
                <option>Ahan - Java</option>
            </select>
        </div>
        <div className='row container ms-5 ps-5'>
            <div className='col-7 mt-5 '>
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
            <div className='col-5 listener-report-divbox mt-3'>
                <div className='row'>
                    <div className='col-5 ms-4 pt-5'>
                        <h6 >Total Marks</h6>
                        <h6 className='pt-3'>Out Of</h6>
                        <h6 className='pt-3'>Total Percentage</h6>
                    </div>
                    <div className='col-1 pt-5'>
                        <h6>:</h6>
                        <h6 className='pt-3'>:</h6>
                        <h6 className='pt-3'>:</h6>
                    </div>
                    <div className='col-5 pt-5'>
                        <h6>80</h6>
                        <h6 className='pt-3'>100</h6>
                        <h6 className='pt-3'>80%</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className=' mt-5 container ms-5 ps-5'>
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
        <div className=' mt-5 container ms-5 ps-5'>
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
        <div className=' mt-5 container ms-5 ps-5'>
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
    </div>
  )
}

export default ListenerReport
