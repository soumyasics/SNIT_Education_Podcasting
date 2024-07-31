import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ViewQuestion() {

    const navigate=useNavigate();

    const handledit = () => {
        navigate('/createreditquestion')
    }

    const[data,setData]=useState([]);
    const [select, setSelect] = useState('');
    const listenerid = localStorage.getItem("listenerid")
    const handleSelect = (e) => {
        const { name, value } = e.target;
        setSelect(value);
    };

  return (
    <div className='container'>
        <div className='text-center'>
            <h3 className='add-question-h3'>Python</h3>
        </div>
        <div className=' mt-5 ms-5'>
        <select 
        className='add-question-select ps-3'
        name='select'
        onChange={handleSelect}
        >
            {data.map((item) => (
                    <option>{item.podcastname}</option>
            ))}
        </select>
        </div>
        <div className=''>
            <div className='ms-5 mt-5'>
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
            <div className='ms-5'>
                <h5>Question 3</h5>
                <p>Which of the following is a mutable data type in Python?</p>
                <p>A.Tuple</p>
                <p>B.List</p>
                <p>C.String</p>
                <p>D.Integer</p>
                <p>Answer: B.List</p>
            </div>
        </div>
        <div className='text-center'>
            <button className='view-question-editbtn' onClick={handledit}>Edit</button>
        </div>
    </div>
  )
}

export default ViewQuestion
