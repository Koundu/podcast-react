import React from "react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputComponent from "../common/input";
import Button from "../common/Button";
import FileInput from "../common/input/FileInput";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../firebase";
import { auth } from "../../../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const CreateAPodcastForm = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [displayImage, setDisplayImage] = useState();
    const [bannerImage, setBannerImage] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit =async ()=>{
        if(title && desc && displayImage && bannerImage){
            //1.Upload files -> Get Downloadable Links
            setLoading(true)
            try {
                const bannerImageRef = ref(
                    storage,
                    `podcasts/banner-images/${auth.currentUser.uid}/${Date.now()}`
                );
                await uploadBytes(bannerImageRef, bannerImage);
                const bannerImageURL = await getDownloadURL(bannerImageRef);
                const displayImageRef = ref(
                    storage,
                    `podcasts/display-images/${auth.currentUser.uid}/${Date.now()}`
                );
                await uploadBytes(displayImageRef, displayImage);
                const displayImageURL = await getDownloadURL(displayImageRef);

                const podcastData = {
                    title:title,
                    description:desc,
                    bannerImage: bannerImageURL,
                    displayImage: displayImageURL,
                    createdBy: auth.currentUser.uid,
                }
                
                const docRef = await addDoc(collection(db, "podcasts"),podcastData);
                setTitle("");
                setDesc("");
                setBannerImage(null);
                setDisplayImage(null);
                toast.success("Podcast Created!");
                setLoading(false);
            } catch (error) {
                toast.error(error.message);
                console.log(error);
                setLoading(false)
            }

        }else{
            toast.error("Please Upload All Details!");
            setLoading(false);
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
