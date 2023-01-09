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
                <Col xs={4} md={4} lg={4}><LogoName /></Col>
                <Col xs={0} md={0} lg={4}><LogoDecor/></Col>
                <Col xs={4} md={4} lg={3}><NavBarBusinessOwner /></Col>
                <Col xs={4} md={4} lg={1}><LogOut /></Col>
            </Row>
        </Container>
    )
}