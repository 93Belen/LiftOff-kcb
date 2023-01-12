import { Row, Col, Stack } from "react-bootstrap";
import { Map } from "../Map/Map";
import "./Body.css";
import { Routes, Route } from "react-router";
import { CardsFeed } from "../CardsFeed/CardsFeed";
import { LogIn } from "../Log-in/LogIn";
import { SignUp } from "../Log-in/SignUp";
import MobileAccordion from "../Form/MobileAccordion";

export const BodyHomePage = () => {
  return (
    <Stack id="body" gap={5}>
      <Routes>
        <Route
          path="/"
          element={
              <Row>
                  <Col lg={6}>
                <Map />
              </Col>
              <Col lg={6}>
                <div className="accordion-container">
                  <MobileAccordion />
                </div>
              </Col>
              <Col lg={6}>
                <CardsFeed />
              </Col>
            </Row>
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Stack>
  );
};
