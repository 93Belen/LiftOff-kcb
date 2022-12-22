import { Button } from "react-bootstrap"
import './Buttons.css';
import { useDispatch } from "react-redux";
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectJwt } from '../../state-redux/Store/Selectors';
import store from "../../state-redux/Store/Store";




// React Element => Sign-in Button
export const SignIn = () => {
    const jwt = useSelector(selectJwt);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // on click event
    const handleClick = () => {
        // Get email and password from the log-in form
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        // Put info in request body
            const reqBody = {
                "username": email,
                "password": password
            }   


            const callBackEndAuth = async() => {
                try{

                    const response = await fetch("http://localhost:8080/api/auth/login", {
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
            callBackEndAuth().then(response => dispatch({type: 'jwt/changeState', payload: response})).then(() => navigate("/user/home", {replace: true}));

            //console.log(store.getState());
            console.log(jwt);


    }


    return (
        <Button
        onClick={handleClick}
        id='signInButton'
        className='m-3 mb-0'
        variant='warning'
        >Sign in</Button>
    )
}