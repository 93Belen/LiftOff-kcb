import { Container, Row, Col } from 'react-bootstrap';
import { Map } from '../Map/Map';
import './Body.css';
import { Routes, Route } from 'react-router';
import { CardsFeed } from '../CardsFeed/CardsFeed';
import { FormElement } from '../Form/Form';
import { MyBusinessFeed } from '../CardsFeed/myBusinessesFeed';
import { LikedFeed } from '../CardsFeed/LikedFeed';
import MobileAccordion from '../MobileAccordion/MobileAccordion';

export const BodyBusinessOwner = () => {
    return (
        <Container
        id='body'
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
             <Col>
                 <MobileAccordion />
                 <Map />
             </Col>
             <Col><CardsFeed/></Col>
         </Row>
        } />
        <Route path='/liked' element={
            <Row>
            <Col><LikedFeed /></Col>
        </Row>
        } />
        </Routes>
        </Container>
    )
}