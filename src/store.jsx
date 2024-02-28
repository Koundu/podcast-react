import { configureStore } from "@reduxjs/toolkit";
import  podcastsReducer from "./slices/podcastSlice.js";
import userReducer from "./slices/userSlice.js"


export default configureStore({
    reducer:{
        user: userReducer,
        podcasts: podcastsReducer
    },
});