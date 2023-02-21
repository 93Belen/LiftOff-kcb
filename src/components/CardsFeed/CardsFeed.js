import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectBusinesses, selectBusinessesToDisplay, selectFilters, selectIdsToDisplay } from "../../state-redux/Store/Selectors";
import { CardComponent } from "../Card/CardComponent";
import "./CardsFeed.css";

export const CardsFeed = () => {
  const parent = useRef(null);
  const dispatch = useDispatch();
  let businesses = useSelector(selectBusinesses)
  let filters = useSelector(selectFilters);
  let idsToDisplay = useSelector(selectIdsToDisplay);
  let businessesToDisplay = useSelector(selectBusinessesToDisplay);
  console.log(filters)
  console.log(businesses)
  const getIds = () => {
    dispatch({type: 'idsToDisplay/removeAllIds', payload: [] })
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
  const getBusinesses = async() => {
    try{
        const response = await fetch(`https://liftoff-kcb-backend-maven-production.up.railway.app/api/businesses?ids=${idsToDisplay}`);
        if(response.ok){
            const jsonResponse = response.json();
            return jsonResponse;
        }
        else {
            console.log("auth failed");
        }

    } catch(e){
        console.log(e);
    }
}
  useEffect(()=> {
      getIds()
      console.log("DISPLAY => " + idsToDisplay)
      getBusinesses().then(response => dispatch({type: 'businessToDisplay/changeState', payload: response})).then(() => console.log(businessesToDisplay))
  }, [filters, businesses])


  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);



  const displayCards = () => {
    let arr = []
    for(const business of businessesToDisplay){
      arr.push(<CardComponent info={business} />)
    }
    return arr;
  }



  return (
    <Container id="feed">
      <Stack gap={4} direction="vertical">
        {displayCards()}
      </Stack>
    </Container>
  );
};
