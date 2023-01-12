import { Card, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux";
import { selectLoginInfo } from "../../state-redux/Store/Selectors";
import { AddNew } from "../Buttons/AddNew";
import { Delete } from "../Buttons/Delete";
import { Like } from "../Buttons/Like";
import { Edit } from '../Buttons/Edit'
import "./CardComponent.css";

export const CardComponent = () => {


    return (
        <Card className='cardComponent'>
            <Row>
                <Col><h2>Business name</h2></Col>
                <Col className='right-col'><a href='' target='_blank'>Websitelink.com</a></Col>
            </Row>
            <Row>
                <Col><p className='details'>Women owned</p></Col>
                <Col className='right-col details'><p>Coffee</p></Col>
            </Row>
            <Row>
                <Col><p>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col><p id='adress'>Adresss</p></Col>
                <Col className='right-col'><Like /></Col>
            </Row>
        </Card>
    )
}