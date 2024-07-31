import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EditQuestions() {

    const navigate=useNavigate()

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
    const[datas,setDatas]=useState([])
    const [select, setSelect] = useState('');
    const listenerid = localStorage.getItem("listenerid")
    const handleSelect = (e) => {
        const { name, value } = e.target;
        setSelect(value);
    };


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

        // navigate("/createrviewquestion")
    }

  return (
    <div>
        <div className='text-center'>
            <h3 className='add-question-h3'>Edit Questions</h3>
        </div>
        <div className='container mt-5 '>
            <select 
            className='add-question-select ps-3'
            name='select'
            onChange={handleSelect}
            >
                {datas.map((item) => (
                    <option>{item.podcastname}</option>
                ))}
            </select>
        </div>
        {errors.select && <span className='text-danger  ms-5 ps-5'>{errors.select}</span>}
        <div className='container mt-5'>
            <label className='ms-4 add-question-label me-2 '>1.</label>
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
            {errors.option2 && <span className='text-danger ms-5 ps-3'>{errors.option2}</span>}
            <div>
                <label className='ms-4 add-question-label me-2 mt-5'>C.</label>
                <input type='text'
                className='add-question-optiontextbox ms-3 ps-3'
                placeholder='Option'
                />
            </div>
            {errors.option3 && <span className='text-danger ms-5 ps-3'>{errors.option3}</span>}
            <div>
                <label className='ms-4 add-question-label me-2 mt-5'>D.</label>
                <input type='text'
                className='add-question-optiontextbox ms-3 ps-3'
                placeholder='Option'
                />
            </div>
            {errors.option4 && <span className='text-danger ms-5 ps-3'>{errors.option4}</span>}
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
        </div>
        <div>
             
        </div>
        <div className='text-center'>
            <button className='add-question-addbtn'>Add +</button>
            <button className='add-question-savebtn ms-3' onClick={handlesubmit}>Save</button>
        </div>
    </div>
  )
}

export default EditQuestions
