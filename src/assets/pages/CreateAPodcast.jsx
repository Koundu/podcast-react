import React from "react"
import Header from "../components/common/Header";
import CreateAPodcastForm from "../components/StartAPodcast/CreateAPodcast";


const CreateAPodcastPage = (props) => {
  return (
    <div>
      <Header/>
      <div className="input-wrapper">
        <h1>Create A Podcast</h1>
        <CreateAPodcastForm/>
      </div>
    </div>
  )
};

export default CreateAPodcastPage;
