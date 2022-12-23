import { Row, Col, Stack } from 'react-bootstrap';
import { Map } from '../Map/Map';
import './Body.css';
import { Routes, Route } from 'react-router';
import { CardsFeed } from '../CardsFeed/CardsFeed';
import { LogIn } from '../Log-in/LogIn';
import { SignUp } from '../Log-in/SignUp';

export const BodyHomePage = () => {
    return (
        <Stack
        id='body'
        direction='horizontal'
        gap={5}
        >
        <Routes>
        <Route path='/' element={
            <Row>
                <Col><Map /></Col>
                <Col><CardsFeed /></Col>
            </Row>
        } />
        <Route path='/login' element={
            <LogIn />
        } />
        <Route path='/signup' element={
            <SignUp />
        } />
        </Routes>
        </Stack>
    )
}