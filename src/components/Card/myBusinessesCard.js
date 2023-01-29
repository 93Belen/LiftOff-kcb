import { Card, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux";
import { selectLoginInfo } from "../../state-redux/Store/Selectors";
import { AddNew } from "../Buttons/AddNew";
import { Delete } from "../Buttons/Delete";
import { Like } from "../Buttons/Like";
import { Edit } from '../Buttons/Edit'
import "./CardComponent.css";

export const MyBusinessCard = (props) => {
    let info = props.info;

    return (
        <Card className='cardComponent'>
            <Row>
                <Col><h2>{info.name}</h2></Col>
                <Col className='right-col'><a href='' target='_blank'>{info.businessDetails.websiteUrl}</a></Col>
            </Row>
            <Row>
                <Col><p className='details'>{info.ownerTypes[0].name} owned</p></Col>
                <Col className='right-col details'><p>{info.businessType.name}</p></Col>
            </Row>
            <Row>
                <Col lg={8} xs={10}><p>{info.businessDetails.description}</p></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col><p id='adress'>Adresss</p></Col>
                <Col lg={6} className='right-col'><Delete id={info.id} /><Edit id={info.id} /></Col>
            </Row>
        </Card>
    )
}