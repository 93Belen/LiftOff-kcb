import { Button } from "react-bootstrap"
import './Buttons.css';
import { useDispatch } from "react-redux";
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectJwt } from '../../state-redux/Store/Selectors';
import store from "../../state-redux/Store/Store";




// React Element => Sign-in Button
export const SignupButton = () => {
    // on click event
    const handleClick = async() => {
        // Get email and password from the log-in form
        let email = document.getElementById('register-email').value;
        let password = document.getElementById('register-password').value;
        let role = document.getElementById('role').checked;


        // Put info in request body
            const reqBody = {
                "username": email,
                "password": password,
                "role": role
            }   

            console.log(reqBody);
                try{

                    const response = await fetch("http://localhost:8080/api/auth/register", {
                        headers: {
                            "Content-type": "application/json"
                        },
                        method: "post",
                        body: JSON.stringify(reqBody)
                    });
                    if(response.ok){
                        const jsonResponse = response.json();
                        return jsonResponse;
                    }
                    else {
                        console.log("auth failed");
                    }
        
                } catch(e){
                    console.log(e);
                }

           

    }


    return (
        <Button
        onClick={handleClick}
        id='signInButton'
        className='m-2'
        variant='warning'
        >Sign up</Button>
    )
}