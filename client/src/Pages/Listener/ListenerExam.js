import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../Baseurl';

function ListenerExam() {
  const { id } = useParams(); // Extracting the podcast ID from the URL
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axiosInstance.post(`/getQuestionByPodcastId/${id}`)
      .then(response => {
        setQuestions(response.data);
        console.log(response.data, "pp");
      })
      .catch(error => {
        setError("An error occurred while fetching the questions.");
      });
  }, [id]);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  const renderQuestion = (question, index) => {
    const questionText = question[`question${index + 1}`];
    const options = [
      question[`option${index + 1}1`],
      question[`option${index + 1}2`],
      question[`option${index + 1}3`],
      question[`option${index + 1}4`],
    ];

    if (questionText) {
      return (
        <div>
        <div key={index} className='mt-5 ms-5 mb-5'>
          <h5>Question {index + 1}</h5>
          <p className='pt-2'>{questionText} ?</p>
          {options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input type='radio' className='listener-exam-radio' name={`question${index}`} value={String.fromCharCode(65 + optionIndex)} /> {String.fromCharCode(65 + optionIndex)}. {option}
            </div>
          ))}
        </div>
       
</div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className='listener-exam-divbox container mt-3'>
        <div className='text-center mt-5'>
          <h3>{questions[0]?.podcastId?.podcastname || "Podcast Exam"}</h3>
        </div>
        {questions.map((question, qIndex) => (
          <div key={qIndex}>
            {Array.from({ length: 10 }).map((_, index) => renderQuestion(question, index))}
          </div>
        ))}
        <div className='text-center'><button className='mt-5 btn btn-success '>Submit</button></div>
        
      </div>
    </div>
  );
}

export default ListenerExam;
