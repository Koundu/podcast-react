import React from "react"
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "../../../firebase";
import { useNavigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
        return <><Outlet/></>;
};

export default PrivateRoutes;
