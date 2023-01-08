import { Container, Row, Col, Stack } from 'react-bootstrap';
import { Map } from '../Map/Map';
import './Body.css';
import { Routes, Route } from 'react-router';
import { CardsFeed } from '../CardsFeed/CardsFeed';
import { FormElement } from '../Form/Form';
import { MyBusinessFeed } from '../CardsFeed/myBusinessesFeed';
import { LikedFeed } from '../CardsFeed/LikedFeed';

export const BodyBusinessOwner = () => {
    return (
        <Stack
        id='body'
        direction='horizontal'
        gap={5}
        >
        <Routes>
        <Route path='home' element={
            <Row>
                <Col><MyBusinessFeed /></Col>
                <Col><FormElement /></Col>
            </Row>
        } />
        <Route path='/search' element={
            <Row>
            <Col><Map /></Col>
            <Col><CardsFeed /></Col>
        </Row>
        } />
        <Route path='/liked' element={
            <Row>
            <Col><LikedFeed /></Col>
            <Col><LikedFeed /></Col>
        </Row>
        } />
        </Routes>
        </Stack>
    )
}