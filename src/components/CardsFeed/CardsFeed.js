import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectBusinesses, selectFilters, selectIdsToDisplay } from "../../state-redux/Store/Selectors";
import "./CardsFeed.css";

export const CardsFeed = () => {
  const parent = useRef(null);
  const dispatch = useDispatch();
  let businesses = useSelector(selectBusinesses)
  let filters = useSelector(selectFilters);
  let idsToDisplay = useSelector(selectIdsToDisplay);
  console.log(filters)
  console.log(businesses)
  const getIds = () => {
    if(filters.county.length === 0){
      dispatch({type: 'filters/addCounty', payload: 'all'})
     }
    // else {
    //   dispatch({type: 'filters/removeCounty', payload: 'all'})
    // }
    if(filters.businesstype.length === 0){
      dispatch({type: 'filters/addBusinessType', payload: 'all'})
    }
    // else {
    //   dispatch({type: 'filters/removeBusinessType', payload: 'all'})
    // }
    if(filters.ownertype.length === 0){
      dispatch({type: 'filters/addOwnerType', payload: 'all'})
    }
    // else {
    //   dispatch({type: 'filters/removeOwnerType', payload: 'all'})
    // }
    for(const county of filters.county){
      for(const businessType of filters.businesstype){
        for(const ownerType of filters.ownertype){
          const arrOfIds = businesses[county][businessType][ownerType];
          arrOfIds.forEach(id => {
            if(!idsToDisplay.includes(id)){
              dispatch({type: 'idsToDisplay/addId', payload: id})
            }
          });
        }
      }
    }
  }
  useEffect(()=> {
      getIds()
      console.log("DISPLAY => " + idsToDisplay)
  }, [filters, businesses])


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
