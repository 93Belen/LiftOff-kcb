import Accordion from "react-bootstrap/Accordion";
import { Button, Card, Col, Row, Stack } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./MobileAccordion.css";
import { county } from "../../svg-buttons/county";
import { businessType } from "../../svg-buttons/business-type";
import { ownerType } from "../../svg-buttons/ownerType";

function MobileAccordion() {
  return (
    <Accordion flush class="accordion" className="filter-button">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Choose county</Accordion.Header>
        <Accordion.Body>
          {county.jackson}
          {county.clinton}
          {county.platte}
          {county.lafayette}
          {county.wyandotte}
          {county.johnson}
          {county.clay}
          {county.leavenworth}
          {county.bates}
          {county.caldwell}
          {county.cass}
          {county.linn}
          {county.ray}
          {county.miami}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Choose business type</Accordion.Header>
        <Accordion.Body>
          {businessType.food}
          {businessType.coffee}
          {businessType.homeGoods}
          {businessType.clothing}
          {businessType.others}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Choose owner type</Accordion.Header>
        <Accordion.Body>
          {ownerType.black}
          {ownerType.lgbtqia}
          {ownerType.woman}
          {ownerType.inmigrant}
          {ownerType.asian}
          {ownerType.latino}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MobileAccordion;
