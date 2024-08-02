import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Baseurl";

function EditQuestions() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([{
    select: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  }]);
  const [errors, setErrors] = useState({});
  const [select, setSelect] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axiosInstance
      .post("/getAllPodcastByCreator", {
        id: localStorage.getItem("creatorid"),
      })
      .then((result) => {
        setData(result.data.data);
        if (result.data.data.length > 0) {
          setSelect(result.data.data[0].podcastname);
          fetchQuestions(result.data.data[0]._id);
        }
      });
  }, []);

  const fetchQuestions = (podcastId) => {
    axiosInstance
      .post(`/getQuestionByPodcastId/${podcastId}`)
      .then((result) => {
        if (result.data.length > 0) {
          setQuestions(result.data);
          setErrorMessage('');
        } else {
          setQuestions([{
            select: "",
            question: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            answer: "",
          }]);
          setErrorMessage('No questions added for this podcast');
        }
      })
      .catch(() => {
        setErrorMessage('An error occurred while fetching questions');
      });
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newQuestions = [...questions];
    newQuestions[index][name] = value;
    setQuestions(newQuestions);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [`${index}_${name}`]: "",
    }));
  };

  const handleSelect = (e) => {
    const podcastName = e.target.value;
    setSelect(podcastName);
    const selectedPodcast = data.find(podcast => podcast.podcastname === podcastName);
    if (selectedPodcast) {
      fetchQuestions(selectedPodcast._id);
    }
  };

  const validateForm = () => {
    let formErrors = {};
    questions.forEach((question, index) => {
      if (!question.question) formErrors[`${index}_question`] = "Question Required";
      if (!question.option1) formErrors[`${index}_option1`] = "Option A Required";
      if (!question.option2) formErrors[`${index}_option2`] = "Option B Required";
      if (!question.option3) formErrors[`${index}_option3`] = "Option C Required";
      if (!question.option4) formErrors[`${index}_option4`] = "Option D Required";
      if (!question.answer) formErrors[`${index}_answer`] = "Answer Required";
    });
    return formErrors;
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        select: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "",
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      questions.forEach((question) => {
        question.select = select;
        question.creatorId = localStorage.getItem('creatorid');
        const selectedPodcast = data.find(podcast => podcast.podcastname === question.select);
        if (selectedPodcast) {
          question.podcastId = selectedPodcast._id;
        }
        axiosInstance
          .post(`/updateQuestion/${question._id}`, question)
          .then((res) => {
            if (res.status === 200) {
              alert("Updated Successfully");
              navigate("/createrviewquestion");
            }
          })
          .catch((err) => {
            if (err.response && err.response.status === 400 && err.response.data.error === 'A question set already exists for this podcast') {
              setErrorMessage('A question set already exists for this podcast');
            } else {
              alert("Error occurred while updating question");
              console.log(err);
            }
          });
      });
    }
  };

  return (
    <div className="container">
      <div className="text-center">
        <h3 className="add-question-h3">Edit Question</h3>
      </div>
      <select
        className="add-question-select ps-3"
        name="select"
        onChange={handleSelect}
        value={select}
      >
        {data.map((item) => (
          <option key={item._id} value={item.podcastname}>{item.podcastname}</option>
        ))}
      </select>
      {errorMessage && (
        <div className="alert alert-danger mt-3" role="alert">
          {errorMessage}
        </div>
      )}
      {questions.map((question, index) => (
        <div className="container mt-5" key={index}>
          <div className="mt-5">
            <label className="ms-4 add-question-label me-2 ">
              {index + 1}.
            </label>
            <input
              type="text"
              className="add-question-text ms-3 ps-3"
              placeholder="Enter the Question"
              value={question.question}
              name="question"
              onChange={(e) => handleChange(index, e)}
            />
            {errors[`${index}_question`] && (
              <span className="text-danger ms-5 ps-3">
                {errors[`${index}_question`]}
              </span>
            )}
          </div>

          <div>
            <label className="ms-4 add-question-label me-2 mt-5">A.</label>
            <input
              type="text"
              className="add-question-optiontextbox ms-3 ps-3"
              placeholder="Option"
              value={question.option1}
              name="option1"
              onChange={(e) => handleChange(index, e)}
            />
            {errors[`${index}_option1`] && (
              <span className="text-danger ms-5 ps-3">
                {errors[`${index}_option1`]}
              </span>
            )}
          </div>

          <div>
            <label className="ms-4 add-question-label me-2 mt-5">B.</label>
            <input
              type="text"
              className="add-question-optiontextbox ms-3 ps-3"
              placeholder="Option"
              value={question.option2}
              name="option2"
              onChange={(e) => handleChange(index, e)}
            />
            {errors[`${index}_option2`] && (
              <span className="text-danger ms-5 ps-3">
                {errors[`${index}_option2`]}
              </span>
            )}
          </div>

          <div>
            <label className="ms-4 add-question-label me-2 mt-5">C.</label>
            <input
              type="text"
              className="add-question-optiontextbox ms-3 ps-3"
              placeholder="Option"
              value={question.option3}
              name="option3"
              onChange={(e) => handleChange(index, e)}
            />
            {errors[`${index}_option3`] && (
              <span className="text-danger ms-5 ps-3">
                {errors[`${index}_option3`]}
              </span>
            )}
          </div>

          <div>
            <label className="ms-4 add-question-label me-2 mt-5">D.</label>
            <input
              type="text"
              className="add-question-optiontextbox ms-3 ps-3"
              placeholder="Option"
              value={question.option4}
              name="option4"
              onChange={(e) => handleChange(index, e)}
            />
            {errors[`${index}_option4`] && (
              <span className="text-danger ms-5 ps-3">
                {errors[`${index}_option4`]}
              </span>
            )}
          </div>

          <div className="container mt-5 ms-5 ">
            <select
              className="add-question-select ps-3"
              value={question.answer}
              name="answer"
              onChange={(e) => handleChange(index, e)}
            >
              <option value="">Answer</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            {errors[`${index}_answer`] && (
              <span className="text-danger ms-5 ps-3">
                {errors[`${index}_answer`]}
              </span>
            )}
          </div>
        </div>
      ))}

      <div className="text-center mt-4">
        {/*<button className="add-question-addbtn" onClick={handleAddQuestion}>
          Add +
        </button>*/}
        <button className="add-question-savebtn ms-3" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditQuestions;
