import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllBusinesses } from "../../call-backend/getAllBusinesses";
import {
  selectBusinesses,
  selectIsBusinessOwner,
} from "../../state-redux/Store/Selectors";
import { AddNew } from "../Buttons/AddNew";
import { CardComponent } from "../Card/CardComponent";
import "./CardsFeed.css";

export const CardsFeed = () => {
  const [businesses, setBusinesses] = useState([]);
  const parent = useRef(null);

  useEffect(() => {
    getAllBusinesses()
      .then((resolvedBusinesses) => {
        setBusinesses(resolvedBusinesses);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const displayCards = () => {
    let arrayOfCards = [];
    for (const business of businesses) {
      arrayOfCards.push(
        <li style={{ listStyle: "none" }} key={business.id}>
          <CardComponent info={business} />
        </li>
      );
    }
    return arrayOfCards;
  };

  return (
    <Container id="feed">
      <Stack gap={4} direction="vertical">
        {displayCards()}
      </Stack>
    </Container>
  );
};
