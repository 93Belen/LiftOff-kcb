import { Card, Row, Col } from "react-bootstrap"
import { Delete } from "../Buttons/Delete";
import { Edit } from '../Buttons/Edit'
import "./CardComponent.css";

export const MyBusinessCard = (props) => {
    let info = props.info;

    const displayAllOwnerTypes = () => {
        let arrayCol = [];
        info.ownerTypes.forEach((owner, index) => {
            if(index > 0){
                arrayCol.push(" & " + owner.name)
            }
            else {
                arrayCol.push(owner.name)
            }
        })
        return arrayCol;
    }

    return (
        <Card key={info.id} className='cardComponent'>
            <Row>
                <Col><h2>{info.name}</h2></Col>
                <Col className='right-col'><a href={info.businessDetails.websiteUrl} target='_blank' rel="noreferrer">{info.businessDetails.websiteUrl}</a></Col>
            </Row>
            <Row>
                <Col><p className='details'>{displayAllOwnerTypes()} owned</p></Col>
                <Col className='right-col details'><p>{info.businessType.name}</p></Col>
            </Row>
            <Row>
                <Col lg={8} xs={10}><p>{info.businessDetails.description}</p></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col><p id='adress'>{info.businessLocation.streetAddress}</p></Col>
                <Col lg={6} className='right-col'><Delete id={info.id} /><Edit id={info.id} /></Col>
            </Row>
        </Card>
    )
}