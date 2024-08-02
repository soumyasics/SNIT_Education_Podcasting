import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Baseurl";

function EditQuestions() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [select, setSelect] = useState("");
  const [questions, setQuestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleEdit = () => {
    navigate("/createreditquestion");
  };

  const handleSelect = (e) => {
    const podcastName = e.target.value;
    setSelect(podcastName);

    const selectedPodcast = data.find(
      (podcast) => podcast.podcastname === podcastName
    );
    if (selectedPodcast) {
      axiosInstance
        .post(`/getQuestionByPodcastId/${selectedPodcast._id}`)
        .then((result) => {
          if (result.data.length > 0) {
            setQuestions(result.data);
            setErrorMessage("");
          } else {
            setQuestions([]);
            setErrorMessage("No questions added for this podcast");
          }
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            setErrorMessage("No questions found for the selected podcast");
          } else {
            setErrorMessage("An error occurred while fetching questions");
          }
          setQuestions([]);
        });
    }
  };

  useEffect(() => {
    axiosInstance
      .post("/getAllPodcastByCreator", {
        id: localStorage.getItem("creatorid"),
      })
      .then((result) => {
        const podcasts = result.data.data;
        setData(podcasts);

        if (podcasts.length > 0) {
          const firstPodcast = podcasts[0];
          setSelect(firstPodcast.podcastname);

          axiosInstance
            .post(`/getQuestionByPodcastId/${firstPodcast._id}`)
            .then((result) => {
              if (result.data.length > 0) {
                setQuestions(result.data);
                setErrorMessage("");
              } else {
                setQuestions([]);
                setErrorMessage("No questions added for this podcast");
              }
            })
            .catch((err) => {
              if (err.response && err.response.status === 404) {
                setErrorMessage("No questions found for the selected podcast");
              } else {
                setErrorMessage("An error occurred while fetching questions");
              }
              setQuestions([]);
            });
        }
      });
  }, []);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      [name]: value,
    };
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    const selectedPodcast = data.find(
      (podcast) => podcast.podcastname === select
    );
    if (selectedPodcast) {
      axiosInstance
        .put(`/updateQuestion/${selectedPodcast._id}`, { questions })
        .then((result) => {
          alert("Questions updated successfully");
        })
        .catch((error) => {
          setErrorMessage("An error occurred while updating the questions");
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
          <option key={item._id} value={item.podcastname}>
            {item.podcastname}
          </option>
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
          </div>
        </div>
      ))}

      <div className="text-center mt-4">
        <button className="add-question-savebtn ms-3" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditQuestions;