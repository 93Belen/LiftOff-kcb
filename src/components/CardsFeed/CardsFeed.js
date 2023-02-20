import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef } from "react";
import { Container, Stack } from "react-bootstrap";
import "./CardsFeed.css";

export const CardsFeed = () => {
  const parent = useRef(null);


  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);



  return (
    <Container id="feed">
      <Stack gap={4} direction="vertical">

      </Stack>
    </Container>
  );
};
