import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Baseurl";

function AddQuestion() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  const creatorid = localStorage.getItem("creatorid");

  const [question, setQuestion] = useState([]);
  const [questions, setQuestions] = useState([]);
  //   {
  //     select: "",
  //     question: "",
  //     option1: "",
  //     option2: "",
  //     option3: "",
  //     option4: "",
  //     answer: "",
  //   },

  const [errors, setErrors] = useState({});
  const [select, setSelect] = useState('');

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
    const { name, value } = e.target;
    setSelect(value);
  };

  const formValidating = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }
  };

  const validateForm = () => {
    let formErrors = {};
    questions.forEach((question, index) => {
      if (!question.select)
        formErrors[`${index}_select`] = "Select option Required";
      if (!question.question)
        formErrors[`${index}_question`] = "Question Required";
      if (!question.option1)
        formErrors[`${index}_option1`] = "Option A Required";
      if (!question.option2)
        formErrors[`${index}_option2`] = "Option B Required";
      if (!question.option3)
        formErrors[`${index}_option3`] = "Option C Required";
      if (!question.option4)
        formErrors[`${index}_option4`] = "Option D Required";
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

  useEffect(() => {
    axiosInstance
      .post("/getAllPodcastByCreator", {
        id: localStorage.getItem("creatorid"),
      })
      .then((result) => {
        setdata(result.data.data, "p");
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    console.log(questions);

    if (Object.keys(formErrors).length === 0) {
        console.log("pp");

      for (var i in questions) {
        var question = questions[i];
        question.select = select;
        question.creatorId = localStorage.getItem('creatorid');
        for (var n in data) {
            console.log(data[n]);
            if (data[n].podcastname == question.select) {
                question.podcastId = data[n]._id
            }
        }
        axiosInstance
          .post(`createQuestion`, question)
          .then((res) => {
            console.log(res);
            if (res.data.status === 200) {
              alert("Added Successfully");
              console.log(res);
            }
          })
          .catch((err) => {
            alert("error");
            console.log(err);
          });
      }
    }
  };

  return (
    <div className="container">
      <div className="text-center ">
        <h3 className="add-question-h3">Add Questions</h3>
      </div>
      <select
        className="add-question-select ps-3"
        // value={}
        name="select"
        onChange={handleSelect}
      >
        {data.map((item) => (
          <option className="add-question-option">{item.podcastname}</option>
        ))}
      </select>
      {/*{errors[`${}_select`] && <span className='text-danger ms-5 ps-5'>{errors[`${index}_select`]}</span>}*/}
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
              <option>Answer</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
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
        <button className="add-question-addbtn" onClick={handleAddQuestion}>
          Add +
        </button>
        <button className="add-question-savebtn ms-3" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddQuestion;
