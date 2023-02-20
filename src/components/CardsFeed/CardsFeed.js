import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef } from "react";
import { Container, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectBusinesses, selectFilters } from "../../state-redux/Store/Selectors";
import "./CardsFeed.css";

export const CardsFeed = () => {
  const parent = useRef(null);
  const dispatch = useDispatch();
  let businesses = useSelector(selectBusinesses)
  let filters = useSelector(selectFilters);
  console.log(filters)
  console.log(businesses)
  const getIds = () => {
    if(filters.county.length === 0){
      dispatch({type: 'filters/addCounty', payload: 'all'})
    }
    if(filters.businesstype.length === 0){
      dispatch({type: 'filters/addBusinessType', payload: 'all'})
    }
    if(filters.ownertype.length === 0){
      dispatch({type: 'filters/addOwnerType', payload: 'all'})
    }
    for(const county of filters.county){
      for(const businessType of filters.businesstype){
        for(const ownerType of filters.ownertype){
          console.log("RESULT => " + businesses[county][businessType][ownerType])
        }
      }
    }
  }
  useEffect(()=> {
    if(businesses !== null){
      getIds()
    }
  }, [businesses, filters])


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
