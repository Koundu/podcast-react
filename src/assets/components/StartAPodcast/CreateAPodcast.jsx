import React from "react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputComponent from "../common/input";
import Button from "../common/Button";
import FileInput from "../common/input/FileInput";

const CreateAPodcastForm = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [displayImage, setDisplayImage] = useState();
    const [bannerImage, setBannerImage] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = ()=>{
        if(title && desc && displayImage && bannerImage){
            toast.success("Handling Form");
        }else{
            toast.error("Please Upload All Details!")
        }
    };

    const displayImageHandle = (file)=>{
        setDisplayImage(file);
    }

    const bannerImageHandle = (file)=>{
        setBannerImage(file);
    }

  return (
    <>
    <InputComponent
        state = {title}
        setState = {setTitle}
        placeholder="Title"
        type="text"
        required={true}
    />
    <InputComponent
    state = {desc}
    setState = {setDesc}
    placeholder="Description"
    type="text"
    required={true}
    />
    <FileInput accept={"image/*"} id="display-image-input" text={"Display Image Upload"}fileHandleFn={displayImageHandle}/>
    <FileInput accept={"image/*"} id="banner-image-input" text={"Banner Image Upload"}fileHandleFn={bannerImageHandle}/>
    <Button text={loading ? "Loading...":"Create A Podcast"} disabled={loading} onClick={handleSubmit}/>
    </>
  )
};

export default CreateAPodcastForm;
