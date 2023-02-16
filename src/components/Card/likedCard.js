import { Card, Row, Col } from "react-bootstrap"
import "./CardComponent.css";
import { DeleteLiked } from "../Buttons/DeleteLiked";


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
                <Col xs={3} lg={3} className='right-col'><a href={info.businessDetails.websiteUrl} target='_blank' rel="noreferrer">{info.businessDetails.websiteUrl}</a></Col>
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
                <Col className='right-col'><DeleteLiked id={info.id} /></Col>
            </Row>
        </Card>
    )
}