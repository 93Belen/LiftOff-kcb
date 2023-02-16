import { Nav, Container, FloatingLabel, Form, FormControl, FormGroup} from "react-bootstrap"
import { SignIn } from "../Buttons/signIn";
import './LogIn.css';

export const LogIn = () => {
    return (
        <Container id='log-in'>
            <svg id='svg-login' viewBox="0 0 994 889" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M991.305 761.192L117.095 845.262L72.6356 42.4584L928.661 2.60945L991.305 761.192Z" stroke="#AA283C" stroke-width="5" stroke-linejoin="round"/>
            <path d="M920.838 801.652L47.0722 885.762L2.63549 82.5747L858.225 42.707L920.838 801.652Z" stroke="#201D1D" stroke-width="5" stroke-linejoin="round"/>
            </svg>
            <Form id='log-in-form'>
                <h2 id='logInTitle'>Log-in</h2>
                <FormGroup
                className='mb-4'
                >
                    <FloatingLabel label='Email'>
                        <FormControl id='email' type='email' />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup
                className='mb-4'
                >
                    <FloatingLabel label='Password'>
                        <FormControl id='password' type='password' />
                    </FloatingLabel>
                </FormGroup>
                <SignIn />
                <Nav.Link id='sign-up-link' href='/signup'>Sign up</Nav.Link>
            </Form>
            
        </Container>
    )
}