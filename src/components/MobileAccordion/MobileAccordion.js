import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import "./MobileAccordion.css";
import { county } from "../../svg-buttons/county";
import { businessType } from "../../svg-buttons/business-type";
import { ownerType } from "../../svg-buttons/ownerType";
import { useDispatch, } from "react-redux";

function MobileAccordion() {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch({ type: "filters/toggleFilter", payload: id });
  };
  return (
    <Accordion class="accordion" className="filter-button">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Choose county</Accordion.Header>
        <Accordion.Body>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("jackson")}
          >
            {county.jackson}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("clinton")}
          >
            {county.clinton}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("platte")}
          >
            {county.platte}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("lafayette")}
          >
            {county.lafayette}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("wyandotte")}
          >
            {county.wyandotte}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("clay")}
          >
            {county.clay}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("leavenworth")}
          >
            {county.leavenworth}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("bates")}
          >
            {county.bates}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("caldwell")}
          >
            {county.caldwell}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("cass")}
          >
            {county.cass}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("linn")}
          >
            {county.linn}
          </Button>
          <Button className="accordion-btns" onClick={() => handleClick("ray")}>
            {county.ray}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("miami")}
          >
            {county.miami}
          </Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Choose business type</Accordion.Header>
        <Accordion.Body>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("food")}
          >
            {businessType.food}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("coffee")}
          >
            {businessType.coffee}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("homeGoods")}
          >
            {businessType.homeGoods}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("clothing")}
          >
            {businessType.clothing}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("others")}
          >
            {businessType.others}
          </Button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Choose owner type</Accordion.Header>
        <Accordion.Body>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("black")}
          >
            {ownerType.black}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("lgbtqia")}
          >
            {ownerType.lgbtqia}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("woman")}
          >
            {ownerType.woman}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("inmigrant")}
          >
            {ownerType.inmigrant}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("asian")}
          >
            {ownerType.asian}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("latino")}
          >
            {ownerType.latino}
          </Button>
          <Button
            className="accordion-btns"
            onClick={() => handleClick("black")}
          >
            {ownerType.black}
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MobileAccordion;
