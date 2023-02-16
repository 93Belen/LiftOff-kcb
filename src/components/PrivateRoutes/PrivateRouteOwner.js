import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import jwt_decode from 'jwt-decode';


export const PrivateRouteOwner = () => {
    const jwt = localStorage.getItem("jwt");
    const role = localStorage.getItem('role')

   
    //console.log(decoded)
    const d = new Date(0);
    try{
        // Decode jwt to get expiration date (set to one hour)
        const decoded = jwt_decode(jwt)
        d.setUTCSeconds(decoded.exp);
    } catch(e){
        console.log(e)
    }
    

    // Get current time
    const now = new Date();

    // Compare times to check if it is expired
    // Check that is the right role for this UI
    let canLogIn;
    if(jwt === null || now > d){
        canLogIn = false;
    }
    else {
        if(now < d && role === 'owner'){
            canLogIn = true
        }
        else {
            canLogIn = false
            sessionStorage.removeItem('jwt')
            sessionStorage.removeItem('role')
        }
    }

    


    return canLogIn ? <Outlet /> : <Navigate to="/login" />;
}