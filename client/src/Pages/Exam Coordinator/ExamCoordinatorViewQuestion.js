import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import axiosInstance from '../../Baseurl';

function ExamCoordinatorViewQuestion() {
  const { id } = useParams(); // Extracting the question ID from the URL
  const [question, setQuestion] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axiosInstance.post(`/getQuestionById/${id}`)
      .then(response => {
        setQuestion(response.data);
      })
      .catch(error => {
        setError("An error occurred while fetching the question.");
      });
  }, [id]);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='ms-5 ps-1'>
        <Link to='/examcoordinateviewrequest' className='view-question-icon'>
          <IoArrowBackOutline />
        </Link>
      </div>
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-10 view-request-divbox'>
          <div className='text-center mt-4'>
            <h4>{question.select}</h4>
          </div>
          {Array.from({ length: 10 }).map((_, index) => {
            const questionKey = `question${index + 1}`;
            const answerKey = `answer${index + 1}`;
            const options = [`option${index + 1}1`, `option${index + 1}2`, `option${index + 1}3`, `option${index + 1}4`];

            if (question[questionKey]) {
              return (
                <div key={index} className='ms-5'>
                  <h5>Question {index + 1}</h5>
                  <p>{question[questionKey]}</p>
                  {options.map((optionKey, oIndex) => (
                    <p key={oIndex}>
                      {String.fromCharCode(65 + oIndex)}. {question[optionKey]}
                    </p>
                  ))}
                  <p>Answer: {question[`option${index + 1}${['A', 'B', 'C', 'D'].indexOf(question[answerKey]) + 1}`]}</p>
                </div>
              );
            }
            return null;
          })}
          <div className='text-center'>
            <button className='view-question-approvebtn'>Approve</button>
            <button className='view-question-rejectbtn ms-5'>Reject</button>
          </div>
        </div>
        <div className='col-1'></div>
      </div>
    </div>
  );
}

export default ExamCoordinatorViewQuestion;
