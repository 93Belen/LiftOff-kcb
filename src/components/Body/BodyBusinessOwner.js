import { Container, Row, Col, Stack } from 'react-bootstrap';
import { Map } from '../Map/Map';
import './Body.css';
import { Routes, Route } from 'react-router';
import { CardsFeed } from '../CardsFeed/CardsFeed';
import { FormElement } from '../Form/Form';

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
                <Col><CardsFeed/></Col>
                <Col><FormElement /></Col>
            </Row>
        } />
        <Route path='/search' element={
            <Row>
            <Col><Map /></Col>
            <Col><CardsFeed searchPage={true}/></Col>
        </Row>
        } />
        <Route path='/liked' element={
            <Row>
            <Col><CardsFeed searchPage={false} /></Col>
            <Col><CardsFeed searchPage={false}/></Col>
        </Row>
        } />
        </Routes>
        </Stack>
    )
}