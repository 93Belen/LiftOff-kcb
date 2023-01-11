import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, Outlet } from 'react-router-dom';
import jwt_decode from 'jwt-decode';


export const PrivateRouteOwner = () => {
    const jwt = localStorage.getItem("jwt");
    const role = localStorage.getItem('role')

    // Decode jwt to get expiration date (set to one hour)
    const decoded = jwt_decode(jwt)
    console.log(decoded)
    const d = new Date(0);
    d.setUTCSeconds(decoded.exp);

    // Get current time
    const now = new Date();

    // Compare times to check if it is expired
    // Check that is the right role for this UI
    let canLogIn;
    if(jwt === null){
        canLogIn = false;
    }
    else {
        if(now < d && role === 'owner'){
            canLogIn = true
        }
        else {
            canLogIn = false
        }
    }

    


    return canLogIn ? <Outlet /> : <Navigate to="/login" />;
}