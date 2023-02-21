import { Card, Row, Col } from "react-bootstrap";
import { Like } from "../Buttons/Like";
import "./CardComponent.css";

export const CardComponent = (props) => {
  let info = props.info;

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
    <Card key={info.id} className="cardComponent">
      <Row>
        <Col>
          <h2>{info.name}</h2>
        </Col>
        <Col className="right-col">
          <a href={"http://" + info.businessDetails.websiteUrl } target="_blank" rel="noreferrer" >
            {info.businessDetails.websiteUrl}
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="details">{displayAllOwnerTypes()} owned</p>
        </Col>
        <Col className="right-col details">
          <p>{info.businessType.name}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={8} xs={10}>
          <p id="description">{info.businessDetails.description}</p>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <p id="address">
            {info.businessLocation.streetAddress}
          </p>
        </Col>
        <Col className="right-col">
          <Like id={info.id} info={info} />
        </Col>
      </Row>
    </Card>
  );
};
