import Accordion from "react-bootstrap/Accordion";
import { Card, Col, Row, Stack } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./MobileAccordion.css";
import { county } from "../../svg-buttons/county";

function MobileAccordion() {
  return (
    <Accordion flush class="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Choose county</Accordion.Header>
        <Accordion.Body>
          <Container fluid>
            <Row>
              <Stack direction="horizontal">
              <Col xs={4} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>Jackson</Card.Body>
                </Card>
                </Col>
                <Col xs={4} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>Clinton</Card.Body>
                </Card>
                </Col>
                <Col xs={4} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>Platte</Card.Body>
                </Card>
                </Col>
                </Stack>
            </Row>
            <Row>
              <Stack direction="horizontal">
              <Col xs={4} md={4} lg={4} className='column'>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>Lafayette</Card.Body>
                </Card>
                </Col>
                <Col xs={4} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>Wyandotte</Card.Body>
                </Card>
                </Col>
                <Col xs={4} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>Johnson</Card.Body>
                </Card>
                </Col>
                </Stack>
            </Row>
            <Row>
              <Stack direction="horizontal">
              <Col xs={4} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>Clay</Card.Body>
                </Card>
                </Col>
                <Col xs={4} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>Leavenworth</Card.Body>
                </Card>
                </Col>
                <Col xs={4} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>Bates</Card.Body>
                </Card>
                </Col>
                </Stack>
            </Row>
            <Row>
              <Stack direction="horizontal">
              <Col xs={4} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>Caldwell</Card.Body>
                </Card>
                </Col>
                <Col xs={4} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>Cass</Card.Body>
                </Card>
                </Col>
                <Col xs={4} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>Linn</Card.Body>
                </Card>
                </Col>
                </Stack>
            </Row>
            <Row>
              <Stack direction="horizontal">
              <Col xs={4} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>Ray</Card.Body>
                </Card>
                </Col>
                <Col xs={4} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src="" />
                  <Card.Body>Miami</Card.Body>
                </Card>
                </Col>
                </Stack>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Choose business type</Accordion.Header>
        <Accordion.Body>{/* Inner  Content */}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Choose owner type</Accordion.Header>
        <Accordion.Body>{/* Inner  Content */}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MobileAccordion;
