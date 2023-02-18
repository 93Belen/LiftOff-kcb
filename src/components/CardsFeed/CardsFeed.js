import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllBusinesses } from "../../call-backend/getAllBusinesses";
import { locationFiltersSelected } from "../../state-redux/Store/Selectors";
import { businessTypeFiltersSelected } from "../../state-redux/Store/Selectors";
import { ownerTypeFiltersSelected } from "../../state-redux/Store/Selectors";
import { CardComponent } from "../Card/CardComponent";
import "./CardsFeed.css";

export const CardsFeed = () => {
  const [businesses, setBusinesses] = useState([]);
  const parent = useRef(null);

  const locationFilters = useSelector(locationFiltersSelected);
  const ownerTypeFilters = useSelector(ownerTypeFiltersSelected);
  const businessTypeFilters = useSelector(businessTypeFiltersSelected);

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
    console.log(filteredBusinesses);
    if (
      locationFilters.length ||
      ownerTypeFilters.length ||
      businessTypeFilters.length
    ) {
      filteredBusinesses = businesses.filter((business) => {
        if (
          locationFilters.length &&
          ownerTypeFilters.length &&
          businessTypeFilters.length
        ) {
          if (
            locationFilters.includes(
              business.businessLocation.county.toLowerCase()
            ) &&
            ownerTypeFilters.includes(
              business.ownerTypes[0].name.toLowerCase()
            ) &&
            businessTypeFilters.includes(
              business.businessType.name.toLowerCase()
            )
          ) {
            return true;
          }
          return false;
        } else if (locationFilters.length && ownerTypeFilters.length) {
          if (
            locationFilters.includes(
              business.businessLocation.county.toLowerCase()
            ) &&
            ownerTypeFilters.includes(business.ownerTypes[0].name.toLowerCase())
          ) {
            return true;
          }
          return false;
        } else if (locationFilters.length && businessTypeFilters.length) {
          if (
            locationFilters.includes(
              business.businessLocation.county.toLowerCase()
            ) &&
            businessTypeFilters.includes(
              business.businessType.name.toLowerCase()
            )
          ) {
            return true;
          }
          return false;
        } else if (ownerTypeFilters.length && businessTypeFilters.length) {
          if (
            ownerTypeFilters.includes(
              business.ownerTypes[0].name.toLowerCase()
            ) &&
            businessTypeFilters.includes(
              business.businessType.name.toLowerCase()
            )
          ) {
            return true;
          }
          return false;
        } else if (
          locationFilters.length &&
          !ownerTypeFilters.length &&
          !businessTypeFilters.length
        ) {
          if (
            locationFilters.includes(
              business.businessLocation.county.toLowerCase()
            )
          ) {
            return true;
          }
          return false;
        } else if (
          ownerTypeFilters.length &&
          !locationFilters.length &&
          !businessTypeFilters.length
        ) {
          if (
            ownerTypeFilters.includes(business.ownerTypes[0].name.toLowerCase())
          ) {
            return true;
          }
          return false;
        } else if (
          businessTypeFilters.length &&
          !locationFilters.length &&
          !ownerTypeFilters.length
        ) {
          if (
            businessTypeFilters.includes(
              business.businessType.name.toLowerCase()
            )
          ) {
            return true;
          }

          return false;
        }

        return business;
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
