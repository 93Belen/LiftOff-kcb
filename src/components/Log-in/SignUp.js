import { Container, FloatingLabel, Form, FormControl, FormGroup, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import './LogIn.css';

export const SignUp = () => {
    return (
        <Container id='log-in'>
            <svg id='svg-login' viewBox="0 0 994 889" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M991.305 761.192L117.095 845.262L72.6356 42.4584L928.661 2.60945L991.305 761.192Z" stroke="#AA283C" stroke-width="5" stroke-linejoin="round"/>
            <path d="M920.838 801.652L47.0722 885.762L2.63549 82.5747L858.225 42.707L920.838 801.652Z" stroke="#201D1D" stroke-width="5" stroke-linejoin="round"/>
            </svg>
            <Form id='log-in-form'>
                <h2 id='SignUpTitle'>Sign Up</h2>
                <FormGroup
                className='mb-3'
                >
                    <FloatingLabel label='Email'>
                        <FormControl type='email' />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup
                className='mb-2'
                >
                    <FloatingLabel label='Password'>
                        <FormControl type='password' />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup
                className='mb-2'
                >
                    <FloatingLabel label='Confirm Password'>
                        <FormControl type='password' />
                    </FloatingLabel>
                </FormGroup>
                <Button
                className='m-3 mb-0'
                variant='warning'
                >Done!</Button>
                <Link>Log-in</Link>
            </Form>
            
        </Container>
    )
}