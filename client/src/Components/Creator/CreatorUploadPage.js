import React, { useState, useEffect } from "react";
import "./creatoruploadpodcast.css";
import axiosInstance from "../../Baseurl";
import { useNavigate } from "react-router-dom";
import Footer from "../../Pages/Listener/Footer";

function CreatorUploadPage() {
  const [creator, setCreator] = useState();
  const [CreatorPodcast, setCreatorPodcast] = useState({
    podcastname: "",
    description: "",
    price: "0",
    coverimage: "",
    audio: "",
  });
  const navigate = useNavigate();

  const creatorPodcastChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setCreatorPodcast({
      ...CreatorPodcast,
      [e.target.name]:
        e.target.name === "image" || e.target.name === "audio"
          ? e.target.files
            ? e.target.files[0]
            : null
          : e.target.value,
    });
    // console.log(CreatorPodcast);
  };

  const UploadImage = async (e) => {
    e.preventDefault();
    let data = new FormData();
    for (let key in CreatorPodcast) {
      if (key != "image" && key != "audio") {
        data.append(key, CreatorPodcast[key]);
      }
    }
    data.append("creatorname", localStorage.getItem("creatorname"));
    data.append("files", CreatorPodcast.image);
    data.append("files", CreatorPodcast.audio);
    data.append("creatorId", localStorage.getItem("creatorid"));

    console.log(CreatorPodcast);
    console.log(data.get("files"), "data");

    axiosInstance
      .post("/creator_upload_podcast", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response, "y");
        alert(response.data.msg);
        navigate("/creatorprofile");
      })
      .catch((error) => {
        console.error("Error submitting data: ", error);
      });
  };
  const handleback = () => {
    navigate("/creatorprofile");
  };

  // const creatorname=localStorage.getItem('creatorname')

  useEffect(() => {
    if (localStorage.getItem("creatorid") !== null) {
      navigate("/creatorupload");
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    axiosInstance
      .post("/viewCreatorById", { id: localStorage.getItem("creatorid") })
      .then((response) => {
        console.log(response.data.data);
        setCreator(response.data.data);
      })
      .catch((error) => {
        console.error("Error submitting data: ", error);
      });
  }, []);

  console.log(creator, "l");

  return (
    <div className="podcast_upload">
      <div className="container" style={{ minHieght: "500vh" }}>
        <h4 className="text-center  p-5">Upload Podcast</h4>
        <div className="row">
          <div className="col">
            <label className="Creator_Name_label" for="">
              Creator Name
            </label>
            <input
              name="creatorname"
              type="text"
              class="form-control text-light p-3"
              id="Creator_Name"
              value={creator?.firstname}
              onChange={creatorPodcastChange}
              disabled
            ></input>
            <label className="Creator_Name_label" for="">
              Podcast Name
            </label>
            <input
              type="text"
              class="form-control text-light  p-3"
              id="podcast_Name"
              placeholder="Title"
              onChange={creatorPodcastChange}
              name="podcastname"
              required
            ></input>
            <label className="Creator_Name_label" for="">
              Description
            </label>
            <textarea
              maxlength="120"
              name="description"
              class="form-control"
              id="description"
              rows={3}
              cols={40}
              onChange={creatorPodcastChange}
              required
            />
            {/* <label style={{float:"right"}}><small>write 120 words</small></label> */}
          </div>
          <div className="col">
            <label className="Creator_Name_label mb-2" for="">
              price
            </label>
            <input
              type="number"
              class="form-control  p-3 mb-3"
              id="price"
              placeholder="price"
              onChange={creatorPodcastChange}
              name="price"
              required
            ></input>

            <label className="Creator_Name_label" for="">
              Cover Image
            </label>
            <input
              type="file"
              class="form-control"
              id="coverimg"
              accept=".jpg,.jpeg,.png,.svg"
              placeholder=""
              name="image"
              onChange={creatorPodcastChange}
              required
            ></input>

            <label className="Creator_Name_label" for="">
              Demo Audio
            </label>
            <input
              accept=".mp3"
              type="file"
              class="form-control  p-3"
              id="audio"
              placeholder=""
              name="audio"
              onChange={creatorPodcastChange}
              required
            ></input>
          </div>
        </div>
        <button className="btn btn-light ms-5 px-5 py-3" onClick={UploadImage}>
          Upload
        </button>
        <button
          type="reset"
          onClick={handleback}
          className="btn btn-secondary ms-4 px-5 py-3"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CreatorUploadPage;
