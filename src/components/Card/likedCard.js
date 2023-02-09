import { Card, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux";
import { selectLoginInfo } from "../../state-redux/Store/Selectors";
import { AddNew } from "../Buttons/AddNew";
import { Delete } from "../Buttons/Delete";
import { Like } from "../Buttons/Like";
import { Edit } from '../Buttons/Edit'
import "./CardComponent.css";
import { DeleteLiked } from "../Buttons/DeleteLiked";
import { InvalidTokenError } from "jwt-decode";

export const LikedCard = (props) => {
    const info = props.info;
    //console.log(props.info)
    const displayAllOwnerTypes = () => {
        let arrayCol = [];
        info.ownerTypes.forEach((owner, index) => {
          if (index > 0) {
            arrayCol.push(" & " + owner.name);
          } else {
            arrayCol.push(owner.name);
          }
        });
        return arrayCol;
      };

    return (
        <Card className='cardComponent'>
            <Row>
                <Col xs={9} lg={9}><h2>{info.name}</h2></Col>
                <Col xs={3} lg={3} className='right-col'><a href='' target='_blank'>{info.businessDetails.websiteUrl}</a></Col>
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
                <Col><p id='adress'>Adresss</p></Col>
                <Col className='right-col'><DeleteLiked id={info.id} /></Col>
            </Row>
        </Card>
    )
}