import {Col, Row} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { LogOut } from '../Buttons/Log-out';
import { LogoDecor } from "../LogoDecor/LogoDecor"
import { LogoName } from "../LogoName/LogoName";
import "./NavBar.css";
import { NavBarSearcher } from './NavBarSearcher';


export const HeaderSearcher = () => {
    return (
        <Container 
        fluid
        >
            <Row
            className='navbar'
            >
                <Col><LogoName /></Col>
                <Col><LogoDecor/></Col>
                <Col><NavBarSearcher /></Col>
                <Col className='logout-btn' xs={1} md={1} lg={1}><LogOut /></Col>
            </Row>
        </Container>
    )
}