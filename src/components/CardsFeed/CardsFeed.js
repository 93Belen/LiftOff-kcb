import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef} from "react";
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

  const getIds = () => {
    let arr = [];
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
           if(!arr.includes(id)){
             arr.push(id)
           }
         });
       }
     }
   }
   dispatch({type: 'idsToDisplay/changeAllIds', payload: arr})
 }
  const getBusinesses = async() => {
    console.log("DISPLAY => " + idsToDisplay)
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
      getBusinesses().then(response => dispatch({type: 'businessToDisplay/changeState', payload: response}))
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessesToDisplay])


  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);


  const getCards = () => {
    let arr = [];
    for(const business of businessesToDisplay){
      arr.push(<li style={{listStyle: 'none'}}><CardComponent info={business} /></li>)
    }
    return arr;
  }
 

  return (
    <Container id="feed">
      <Stack gap={4} direction="vertical" ref={parent}>
        {getCards()}
      </Stack>
    </Container>
  );
};
