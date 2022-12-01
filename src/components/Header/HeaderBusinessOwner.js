import {Col, Row, Stack} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { LogOut } from '../Buttons/Log-out';
import { LogoDecor } from "../LogoDecor/LogoDecor"
import { LogoName } from "../LogoName/LogoName";
import "./NavBar.css";
import { NavBarBusinessOwner } from './NavBarBusinessOwner';


export const HeaderBusiness = () => {
    return (
        <Container 
        fluid>
            <Row
            className='navbar'
            >
                <Col xs={2} md={2} lg={2}><LogoName /></Col>
                <Col xs={2} md={2} lg={2}><LogoDecor/></Col>
                <Col xs={2} md={2} lg={2}><NavBarBusinessOwner /></Col>
                <Col xs={1} md={1} lg={1}><LogOut /></Col>
            </Row>
        </Container>
    )
}