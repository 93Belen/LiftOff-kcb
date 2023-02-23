import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import "./MobileAccordion.css";
import { county } from "../../svg-buttons/county";
import { businessType } from "../../svg-buttons/business-type";
import { ownerType } from "../../svg-buttons/ownerType";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../state-redux/Store/Selectors";

function MobileAccordion() {
 
  const filters = useSelector(selectFilters);
    console.log(filters)
    const dispatch = useDispatch();

    const handleCountyClick = (county) => {
      if(filters.county.includes(county)){
        dispatch({type: 'filters/removeCounty', payload: county})
        document.getElementById(county.toLowerCase()).style.fill = '#FABD38'
      }
      else {
        dispatch({type: 'filters/addCounty', payload: county})
        dispatch({type: 'filters/removeCounty', payload: 'all'})
        document.getElementById(county.toLowerCase()).style.fill = '#AA283C'
      }   
    }

    const handleBusinessTypeClick = (businessType) => {
      if(filters.businesstype.includes(businessType)){
        dispatch({type:'filters/removeBusinessType', payload: businessType})
        document.getElementById(businessType).style.filter = '';
      }
      else {
        dispatch({type: 'filters/addBusinessType', payload: businessType})
        dispatch({type: 'filters/removeBusinessType', payload: 'all'})
        document.getElementById(businessType).style.filter = 'none';
      }
    }

    const handleOwnerTypeClick = (ownerType) => {
      if(filters.ownertype.includes(ownerType)){
        dispatch({type:'filters/removeOwnerType', payload: ownerType})
        document.getElementById(ownerType).style.filter = '';
      }
      else {
        dispatch({type: 'filters/addOwnerType', payload: ownerType})
        dispatch({type: 'filters/removeOwnerType', payload: 'all'})
        document.getElementById(ownerType).style.filter = 'none';
      }
    }




  return (
    <Accordion className="filter-button accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Choose county</Accordion.Header>
        <Accordion.Body>
          <Button
            onClick={() => handleCountyClick("Jackson")}
          >
            {county.jackson}
          </Button>
          <Button
            onClick={() => handleCountyClick("Clinton")}
          >
            {county.clinton}
          </Button>
          <Button
            onClick={() => handleCountyClick("Platte")}
          >
            {county.platte}
          </Button>
          <Button
            onClick={() => handleCountyClick("Lafayette")}
          >
            {county.lafayette}
          </Button>
          <Button
            onClick={() => handleCountyClick("Wyandotte")}
          >
            {county.wyandotte}
          </Button>
          <Button
            onClick={() => handleCountyClick("Clay")}
          >
            {county.clay}
          </Button>
          <Button
            onClick={() => handleCountyClick("Leavenworth")}
          >
            {county.leavenworth}
          </Button>
          <Button
            onClick={() => handleCountyClick("Bates")}
          >
            {county.bates}
          </Button>
          <Button
            onClick={() => handleCountyClick("Caldwell")}
          >
            {county.caldwell}
          </Button>
          <Button
            onClick={() => handleCountyClick("Cass")}
          >
            {county.cass}
          </Button>
          <Button
            onClick={() => handleCountyClick("Linn")}
          >
            {county.linn}
          </Button>
          <Button
            onClick={() => handleCountyClick("Ray")}
          >
            {county.ray}
          </Button>
          <Button
            onClick={() => handleCountyClick("Miami")}
          >
            {county.miami}
          </Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Choose business type</Accordion.Header>
        <Accordion.Body>
          <Button
            onClick={() => handleBusinessTypeClick("food")}
          >
            {businessType.food}
          </Button>
          <Button
            onClick={() => handleBusinessTypeClick("coffee")}
          >
            {businessType.coffee}
          </Button>
          <Button
            onClick={() => handleBusinessTypeClick("homegoods")}
          >
            {businessType.homeGoods}
          </Button>
          <Button
            onClick={() => handleBusinessTypeClick("clothing")}
          >
            {businessType.clothing}
          </Button>
          <Button
            onClick={() => handleBusinessTypeClick("others")}
          >
            {businessType.others}
          </Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Choose owner type</Accordion.Header>
        <Accordion.Body>
          <Button
            onClick={() => handleOwnerTypeClick("Black")}
          >
            {ownerType.black}
          </Button>
          <Button
            onClick={() => handleOwnerTypeClick("LGBTQIA")}
          >
            {ownerType.lgbtqia}
          </Button>
          <Button
            onClick={() => handleOwnerTypeClick("Woman")}
          >
            {ownerType.woman}
          </Button>
          <Button
            onClick={() => handleOwnerTypeClick("Immigrant")}
          >
            {ownerType.inmigrant}
          </Button>
          <Button
            onClick={() => handleOwnerTypeClick("Asian")}
          >
            {ownerType.asian}
          </Button>
          <Button
            onClick={() => handleOwnerTypeClick("Latino")}
          >
            {ownerType.latino}
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MobileAccordion;
