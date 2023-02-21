import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { locationFiltersSelected } from "../../state-redux/Store/Selectors";
import { businessTypeFiltersSelected } from "../../state-redux/Store/Selectors";
import { ownerTypeFiltersSelected } from "../../state-redux/Store/Selectors";
import { CardComponent } from "../Card/CardComponent";
import { allBusinesses } from "../../state-redux/Store/Selectors";
import "./CardsFeed.css";

export const CardsFeed = () => {
  // get JWT from local storage
  const jwt = localStorage.getItem("jwt");
  // initialize state variables and references
  const [businesses, setBusinesses] = useState([]);
  const parent = useRef(null);
  // initialize Redux variables and selectors
  const dispatch = useDispatch();
  const locationFilters = useSelector(locationFiltersSelected);
  const ownerTypeFilters = useSelector(ownerTypeFiltersSelected);
  const businessTypeFilters = useSelector(businessTypeFiltersSelected);
  const getAllBusinesses = useSelector(allBusinesses);

  // fetch liked businesses for current user
  const getLikedBusinesses = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/users/me/liked-businesses",
        {
          headers: {
            "Content-type": "application/json",
            "Cache-Control": "no-cache",
            Authorization: "Bearer " + jwt,
          },
        }
      );
      if (response.ok) {
        const jsonResponse = response.json();
        return jsonResponse;
      }
    } catch (e) {
      console.log(e);
    }
  };

  // update businesses when getAllBusinesses changes
  useEffect(() => {
    setBusinesses(getAllBusinesses);
  }, [getAllBusinesses]);

  // autoAnimate on parent element when it changes
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  // fetch liked businesses and dispatch them to Redux state
  useEffect(() => {
    getLikedBusinesses().then((response) => {
      dispatch({ type: "liked/changeState", payload: response });
    });
  }, [businesses]);

  // function to filter and display cards based on selected filters
  const displayCards = () => {
    let filteredBusinesses;
    if (businesses.length) {
      filteredBusinesses = businesses;
    }

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
            business.ownerTypes.some((owner) =>
              ownerTypeFilters.includes(owner.name.toLowerCase())
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
            business.ownerTypes.some((owner) =>
              ownerTypeFilters.includes(owner.name.toLowerCase())
            )
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
            business.ownerTypes.some((owner) =>
              ownerTypeFilters.includes(owner.name.toLowerCase())
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
            business.ownerTypes.some((owner) =>
              ownerTypeFilters.includes(owner.name.toLowerCase())
            )
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
    if (filteredBusinesses) {
      for (const business of filteredBusinesses) {
        arrayOfCards.push(
          <li style={{ listStyle: "none" }} key={business.id}>
            <CardComponent info={business} />
          </li>
        );
      }
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
