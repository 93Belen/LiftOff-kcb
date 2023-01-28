import { Container, FloatingLabel, Form, FormControl, FormGroup, Button, FormCheck } from "react-bootstrap"
import { Link } from "react-router-dom";
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
    confirmPass: false
};

export const SignUp = () => {
    const [newUser, setNewUser] = useState(initialState);
    const [passwordError, setPasswordError] = useState(passVerificationError);

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
    };

    console.log(newUser);

    return (
        <Container id='log-in'>
            {/* <svg id='svg-login' viewBox="0 0 994 889" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M991.305 761.192L117.095 845.262L72.6356 42.4584L928.661 2.60945L991.305 761.192Z" stroke="#AA283C" stroke-width="5" stroke-linejoin="round" />
                <path d="M920.838 801.652L47.0722 885.762L2.63549 82.5747L858.225 42.707L920.838 801.652Z" stroke="#201D1D" stroke-width="5" stroke-linejoin="round" />
            </svg> */}
            <Form id='log-in-form'>

                <h2 id='SignUpTitle'>Sign Up</h2>



                <FormGroup className="mb-2">
                    <Form.Label>Email address</Form.Label>
                    <FormControl
                        type="email"
                        name="email"
                        id="register-email"
                        value={newUser.email}
                        onChange={handleOnChange}
                        placeholder="Enter email" />
                </FormGroup>

                <FormGroup className="mb-2">
                    <Form.Label>Password</Form.Label>
                    <FormControl
                        type="password"
                        name="password"
                        id="register-password"
                        value={newUser.password}
                        onChange={handleOnChange}
                        placeholder="Password" />
                </FormGroup>

                <FormGroup className="mb-2">
                    <Form.Label>Confrim Password</Form.Label>
                    <FormControl
                        type="password"
                        name="confirmPass"
                        id="confirm-password"
                        value={newUser.confirmPass}
                        onChange={handleOnChange}
                        placeholder="Confrim Password" />
                </FormGroup>

                <Form.Text>
                    {!passwordError.confirmPass && (
                        <div className="text-danger mb-3">Password doesn't match!</div>
                    )}
                </Form.Text>



                <ul className="mb-4">
                    <li className={passwordError.isLenthy ? "text-success" : "text-danger"}>Min 8 characters</li>
                    <li className={passwordError.hasUpper ? "text-success" : "text-danger"}>At least one Upper case</li>
                    <li className={passwordError.hasLower ? "text-success" : "text-danger"}>At least one lower case</li>
                    <li className={passwordError.hasNumber ? "text-success" : "text-danger"}>At least one number</li>
                    <li className={passwordError.hasSpclChr ? "text-success" : "text-danger"}>
                        At least one special characters i.e. @ # $ % & !
                    </li>
                </ul>





                <FormGroup id='role-group' className="mb-1">
                    <FormCheck id='role' type="checkbox" label="I am a business owner" />
                </FormGroup>

                <Button
                    variant="primary"
                    type="submit"
                    disabled={Object.values(passwordError).includes(false)}>
                    Test
                </Button>



                <SignupButton />
            </Form>

        </Container>
    )
}