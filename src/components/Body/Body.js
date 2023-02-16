import { Row, Col, Stack } from "react-bootstrap";
import { Map } from "../Map/Map";
import "./Body.css";
import { Routes, Route } from "react-router";
import { CardsFeed } from "../CardsFeed/CardsFeed";
import { LikedFeed } from "../CardsFeed/LikedFeed";
import MobileAccordion from "../MobileAccordion/MobileAccordion";

export const Body = () => {
  return (
    <Stack id="body" direction="horizontal" gap={5}>
      <Routes>
        <Route
          path="/home"
          element={
            <Row>
              <Col>
                <MobileAccordion />
                <Map />
              </Col>
              <Col>
                <CardsFeed />
              </Col>
            </Row>
          }
        />
        <Route path="/liked" element={<LikedFeed />} />
      </Routes>
    </Stack>
  );
};
