import { Container, FloatingLabel, Form, FormControl, FormGroup, FormCheck } from "react-bootstrap"
import { SignupButton } from "../Buttons/Signup";
import './LogIn.css';
import React, { useState, useEffect } from "react";

//Ian's attempt at form validation following 'Dented Code' youtube tutorial
//Link: https://www.youtube.com/watch?v=Vf9jqXm0kTU

const initialState = {
    email: "",
    password: "",
    confirmPass: "",
};

const passVerificationError = {
    isLenthy: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpclChr: false,
    confirmPass: false,
    isEmail: false
};

export const SignUp = () => {
    const [newUser, setNewUser] = useState(initialState);
    const [passwordError, setPasswordError] = useState(passVerificationError);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => { }, [newUser]);

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setNewUser({ ...newUser, [name]: value });

        if (name === "password") {
            const isLenthy = value.length > 8;
            const hasUpper = /[A-Z]/.test(value);
            const hasLower = /[a-z]/.test(value);
            const hasNumber = /[0-9]/.test(value);
            const hasSpclChr = /[@, #, $, %, &, !]/.test(value);

            setPasswordError({
                ...passwordError,
                isLenthy,
                hasUpper,
                hasLower,
                hasNumber,
                hasSpclChr,
            });
        }
        if (name === "confirmPass") {
            setPasswordError({
                ...passwordError,
                confirmPass: newUser.password === value
            });
        }
        if(name === "email") {
            const isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
            setPasswordError({
                ...passwordError,
                isEmail,
            });
        }

    };

    const showMessage = () =>{
        if(Object.values(passwordError).includes(false)) {
            setDisabled(() => true);
        } else {
            setDisabled(() => false);
        }
    }

    console.log(newUser);
    console.log(disabled)
    return (
        <Container id='log-in' onChange={showMessage} onKeyDown={showMessage} onKeyUp={showMessage}>
            {/* <svg id='svg-login' viewBox="0 0 994 889" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M991.305 761.192L117.095 845.262L72.6356 42.4584L928.661 2.60945L991.305 761.192Z" stroke="#AA283C" stroke-width="5" stroke-linejoin="round" />
                <path d="M920.838 801.652L47.0722 885.762L2.63549 82.5747L858.225 42.707L920.838 801.652Z" stroke="#201D1D" stroke-width="5" stroke-linejoin="round" />
            </svg> */}
            <Form id='log-in-form'>

                <h2 id='signUpTitle'>Sign-up</h2>

                <FormGroup className="mb-2">
                    <FloatingLabel label='Email'>
                    <FormControl
                        type="email"
                        name="email"
                        id="register-email"
                        value={newUser.email}
                        onChange={handleOnChange}
                         /></FloatingLabel>
                </FormGroup>
                <Form.Text>
                    {!passwordError.isEmail && ( <div className="text-danger">Please enter a valid email.</div> )}
                </Form.Text>

                <FormGroup className="mb-2">
                    <FloatingLabel label='Password'>
                    <FormControl
                        type="password"
                        name="password"
                        id="register-password"
                        value={newUser.password}
                        onChange={handleOnChange}
                         /></FloatingLabel>
                </FormGroup>

                <FormGroup className="mb-2">
                    <FloatingLabel label='Confirm Password'>
                    <FormControl
                        type="password"
                        name="confirmPass"
                        id="confirm-password"
                        value={newUser.confirmPass}
                        onChange={handleOnChange}
                         /></FloatingLabel>
                </FormGroup>

                <Form.Text>
                    {!passwordError.confirmPass ?(
                        <div className="text-danger">Password doesn't match!</div>
                    ):(
                        <div className="text-success">Passwords Match</div>
                    )}
                    {!passwordError.isLenthy && (
                        <div className="text-danger">Minimum 8 characters</div>
                    )}
                    {!passwordError.hasUpper && (
                        <div className="text-danger">At least one Uppercase</div>
                    )}
                    {!passwordError.hasLower && (
                        <div className="text-danger">At least one Lowercase</div>
                    )}
                    {!passwordError.hasNumber && (
                        <div className="text-danger">At least one Number</div>
                    )}
                    {!passwordError.hasSpclChr && (
                        <div className="text-danger">At least one one of these characters: @ # $ % & !</div>
                    )}
                </Form.Text>



                {/* <ul className="mb-4">
                    <li className={passwordError.isLenthy ? "text-success" : "text-danger"}>Min 8 characters</li>
                    <li className={passwordError.hasUpper ? "text-success" : "text-danger"}>At least one Upper case</li>
                    <li className={passwordError.hasLower ? "text-success" : "text-danger"}>At least one lower case</li>
                    <li className={passwordError.hasNumber ? "text-success" : "text-danger"}>At least one number</li>
                    <li className={passwordError.hasSpclChr ? "text-success" : "text-danger"}>
                        At least one special characters i.e. @ # $ % & !
                    </li>
                </ul> */}

                <FormGroup id='role-group' className="mb-1">
                    <FormCheck id='role' type="checkbox" label="I am a business owner" />
                </FormGroup>


                <SignupButton disabled={disabled} />
            </Form>

        </Container>
    )
}