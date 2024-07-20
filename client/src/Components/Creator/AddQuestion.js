import React, { useState } from 'react'
import AddQuestion1 from './AddQuestion1'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../Baseurl'

function AddQuestion() {

    const navigate=useNavigate()

    const creatorid = localStorage.getItem("creatorid")
    
    const[data,setData]=useState({
        select:"",
        question:"",
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        answer:"",
    })

    const[errors,setErrors]=useState({
        select:"",
        question:"",
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        answer:"",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
          ...data,
          [name]: value,
        });
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      };

    const formValidating = (fieldName, value) => {
        if (!value.trim()) {
          return `${fieldName} is required`;
        }
    }

    const validateForm = () => {
        let formErrors = {};

        if (!data.select) formErrors.select = "Select option Required";
        if (!data.question) formErrors.question = "Question Required";
        if (!data.option1) formErrors.option1 = "Option A Required";
        if (!data.option2) formErrors.option2 = "Option B Required";
        if (!data.option3) formErrors.option3 = "Option C Required";
        if (!data.option4) formErrors.option4 = "Option D Required";
        if (!data.answer) formErrors.answer = "Answer Required";
        
        return formErrors;
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        let errors={};

        errors.select = formValidating("Select",data.select);
        errors.question = formValidating("Question",data.question);
        errors.option1 = formValidating("Option A",data.option1);
        errors.option2 = formValidating("Option B",data.option2);
        errors.option3 = formValidating("Option C",data.option3);
        errors.option4 = formValidating("Option D",data.option4);
        errors.answer = formValidating("Answer",data.answer);

        console.log(data);
        setErrors(errors);

        axiosInstance.post(`createQuestion`,data)
        
        .then((res) => {
            console.log(res);
            if(res.data.status == 200 ){
                alert("Added Successfully")
                console.log(res);
            }
        })
        .catch((err) => {
            alert("error")
            console.log(err);
        })
        // navigate("/createrviewquestion")
    }
  return (
    <div>
        <div className='text-center'>
            <h3 className='add-question-h3'>Add Questions</h3>
        </div>
        <div className='container mt-5 '>
            <select className='add-question-select ps-3'
            value={data.select}
            name='select'
            onChange={handleChange}
            >
                <option className='add-question-option'>Select PodCast</option>
                <option className='add-question-option'>Python</option>
                <option className='add-question-option'>UI/UX</option>
                <option className='add-question-option'>Java</option>
                <option className='add-question-option'>Mern</option>
            </select>
        </div>
        {errors.select && <span className='text-danger  ms-5 ps-5'>{errors.select}</span>}
        <div className='container mt-5'>
            <label className='ms-4 add-question-label me-2 '>1.</label>
            <input type='text'
            className='add-question-text ms-3 ps-3'
            placeholder='Enter the Question'
            value={data.question}
            name='question'
            onChange={handleChange}
            />
            {errors.question && <span className='text-danger ms-5 ps-3'>{errors.question}</span>}
            <div>
                <label className='ms-4 add-question-label me-2 mt-5'>A.</label>
                <input type='text'
                className='add-question-optiontextbox ms-3 ps-3'
                placeholder='Option'
                value={data.option1}
                name='option1'
                onChange={handleChange}
                />
            </div>
            {errors.option1 && <span className='text-danger  ms-5 ps-3'>{errors.option1}</span>}
            <div>
                <label className='ms-4 add-question-label me-2 mt-5'>B.</label>
                <input type='text'
                className='add-question-optiontextbox ms-3 ps-3'
                placeholder='Option'
                value={data.option2}
                name='option2'
                onChange={handleChange}
                />
            </div>
            {errors.option2 && <span className='text-danger ms-5 ps-3'>{errors.option2}</span>}
            <div>
                <label className='ms-4 add-question-label me-2 mt-5'>C.</label>
                <input type='text'
                className='add-question-optiontextbox ms-3 ps-3'
                placeholder='Option'
                value={data.option3}
                name='option3'
                onChange={handleChange}
                />              
            </div>
            {errors.option3 && <span className='text-danger ms-5 ps-3'>{errors.option3}</span>}
            <div>
                <label className='ms-4 add-question-label me-2 mt-5'>D.</label>
                <input type='text'
                className='add-question-optiontextbox ms-3 ps-3'
                placeholder='Option'
                value={data.option4}
                name='option4'
                onChange={handleChange}
                />
            </div>
            {errors.option4 && <span className='text-danger ms-5 ps-3'>{errors.option4}</span>}
            <div className='container mt-5 ms-5 '>
                <select className='add-question-select ps-3'
                    value={data.answer}
                    name='answer'
                    onChange={handleChange}
                >
                    <option>Answer</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </select>
            </div>  
            {errors.answer && <span className='text-danger  ms-5 ps-3'>{errors.answer}</span>}
        </div>
        {/* <div className='container mt-5'>
            <label className='ms-4 add-question-label me-2'>2.</label>
            <input type='text'
            className='add-question-text ms-3 ps-3'
            placeholder='Enter the Question'
            />
            {errors.question && <span className='text-danger ms-5 ps-3'>{errors.question}</span>}
            <div>
                <label className='ms-4 add-question-label me-2 mt-5'>A.</label>
                <input type='text'
                className='add-question-optiontextbox ms-3 ps-3'
                placeholder='Option'
                />
            </div>
            {errors.option1 && <span className='text-danger  ms-5 ps-3'>{errors.option1}</span>}
            <div>
                <label className='ms-4 add-question-label me-2 mt-5'>B.</label>
                <input type='text'
                className='add-question-optiontextbox ms-3 ps-3'
                placeholder='Option'
                />
            </div>
            {errors.option2 && <span className='text-danger  ms-5 ps-3'>{errors.option2}</span>}
            <div>
                <label className='ms-4 add-question-label me-2 mt-5'>C.</label>
                <input type='text'
                className='add-question-optiontextbox ms-3 ps-3'
                placeholder='Option'
                />
            </div>
            {errors.option3 && <span className='text-danger  ms-5 ps-3'>{errors.option3}</span>}
            <div>
                <label className='ms-4 add-question-label me-2 mt-5'>D.</label>
                <input type='text'
                className='add-question-optiontextbox ms-3 ps-3'
                placeholder='Option'
                />
            </div>
            {errors.option4 && <span className='text-danger  ms-5 ps-3'>{errors.option4}</span>}
            <div className='container mt-5 ms-5 '>
                <select className='add-question-select ps-3' >
                    <option>Answer</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </select>
            </div> 
            {errors.answer && <span className='text-danger  ms-5 ps-3'>{errors.answer}</span>} 
        </div>
        <div className='container mt-5'>
            <label className='ms-4 add-question-label me-2'>3.</label>
            <input type='text'
            className='add-question-text ms-3  ps-3'
            placeholder='Enter the Question'
            />
            {errors.question && <span className='text-danger ms-5 ps-3'>{errors.question}</span>}
            <div>
                <label className='ms-4 add-question-label me-2 mt-5'>A.</label>
                <input type='text'
                className='add-question-optiontextbox ms-3 ps-3'
                placeholder='Option'
                />
            </div>
            {errors.option1 && <span className='text-danger  ms-5 ps-3'>{errors.option1}</span>}
            <div>
                <label className='ms-4 add-question-label me-2 mt-5'>B.</label>
                <input type='text'
                className='add-question-optiontextbox ms-3 ps-3'
                placeholder='Option'
                />
            </div>
            {errors.option2 && <span className='text-danger  ms-5 ps-3'>{errors.option2}</span>}
            <div>
                <label className='ms-4 add-question-label me-2 mt-5'>C.</label>
                <input type='text'
                className='add-question-optiontextbox ms-3 ps-3'
                placeholder='Option'
                />
            </div>
            {errors.option3 && <span className='text-danger  ms-5 ps-3'>{errors.option3}</span>}
            <div>
                <label className='ms-4 add-question-label me-2 mt-5'>D.</label>
                <input type='text'
                className='add-question-optiontextbox ms-3 ps-3'
                placeholder='Option'
                />
            </div>
            {errors.option4 && <span className='text-danger  ms-5 ps-3'>{errors.option4}</span>}
            <div className='container mt-5 ms-5 '>
                <select className='add-question-select ps-3' >
                    <option>Answer</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </select>
            </div>  
            {errors.answer && <span className='text-danger  ms-5 ps-3'>{errors.answer}</span>}
        </div> */}
        <div>
             
        </div>
        <div className='text-center'>
            <button className='add-question-addbtn'>Add +</button>
            <button className='add-question-savebtn ms-3' onClick={handlesubmit}>Submit</button>
        </div>
    </div>
  )
}

export default AddQuestion