import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllBusinesses } from "../../call-backend/getAllBusinesses";
import { filtersSelected } from "../../state-redux/Store/Selectors";
import { CardComponent } from "../Card/CardComponent";
import "./CardsFeed.css";

export const CardsFeed = () => {
  const [businesses, setBusinesses] = useState([]);
  const parent = useRef(null);

  const selectedFilters = useSelector(filtersSelected);

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
    let filteredBusinesses = businesses;

    if (selectedFilters.length) {
      filteredBusinesses = businesses.filter((business) => {
        for (const ownerType of business.ownerTypes) {
          if (selectedFilters.includes(ownerType.name.toLowerCase())) {
            return true;
          }
        }

        if (
          selectedFilters.includes(
            business.businessLocation.county.toLowerCase()
          )
        ) {
          return true;
        }

        if (
          selectedFilters.includes(business.businessType.name.toLowerCase())
        ) {
          return true;
        }

        return false;
      });
    }

    let arrayOfCards = [];
    for (const business of filteredBusinesses) {
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
