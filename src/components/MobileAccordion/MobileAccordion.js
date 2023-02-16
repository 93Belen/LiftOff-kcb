import Accordion from "react-bootstrap/Accordion";
import { Button, Card, Col, Row, Stack } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./MobileAccordion.css";
import { county } from "../../svg-buttons/county";
import { businessType } from "../../svg-buttons/business-type";
import { ownerType } from "../../svg-buttons/ownerType";
import { useDispatch, useSelector } from "react-redux";
import { filtersSelected } from "../../state-redux/Store/Selectors";
import { useState } from "react";

function MobileAccordion() {
  const [clickedItems, setClickedItems] = useState([]);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    const index = clickedItems.indexOf(id);
    if (index === -1) {
      setClickedItems([...clickedItems, id]);
    } else {
      setClickedItems(clickedItems.filter((item) => item !== id));
    }
    dispatch({ type: "filters/toggleFilter", payload: id });
  };

  
  return (
    <Accordion class="accordion" className="filter-button">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Choose county</Accordion.Header>
        <Accordion.Body>
          <Button
            className={
              clickedItems.includes("jackson")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("jackson")}
          >
            {county.jackson}
          </Button>
          <Button
            className={
              clickedItems.includes("clinton")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("clinton")}
          >
            {county.clinton}
          </Button>
          <Button
            className={
              clickedItems.includes("platte")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("platte")}
          >
            {county.platte}
          </Button>
          <Button
            className={
              clickedItems.includes("lafayette")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("lafayette")}
          >
            {county.lafayette}
          </Button>
          <Button
            className={
              clickedItems.includes("wyandotte")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("wyandotte")}
          >
            {county.wyandotte}
          </Button>
          <Button
            className={
              clickedItems.includes("clay")
                ? "county countyClicked"
                : "county"
            }
            onClick={() => handleClick("clay")}
          >
            {county.clay}
          </Button>
          <Button
            className={
          clickedItems.includes("leavenworth")
            ? "county countyClicked"
            : "county"
        }
            onClick={() => handleClick("leavenworth")}
          >
            {county.leavenworth}
          </Button>
          <Button
            className={
          clickedItems.includes("bates")
            ? "county countyClicked"
            : "county"
        }
            onClick={() => handleClick("bates")}
          >
            {county.bates}
          </Button>
          <Button
            className={
          clickedItems.includes("caldwell")
            ? "county countyClicked"
            : "county"
        }
            onClick={() => handleClick("caldwell")}
          >
            {county.caldwell}
          </Button>
          <Button
            className={
          clickedItems.includes("cass")
            ? "county countyClicked"
            : "county"
        }
            onClick={() => handleClick("cass")}
          >
            {county.cass}
          </Button>
          <Button
            className={
          clickedItems.includes("linn")
            ? "county countyClicked"
            : "county"
        }
            onClick={() => handleClick("linn")}
          >
            {county.linn}
          </Button>
          <Button className={
          clickedItems.includes("ray")
            ? "county countyClicked"
            : "county"
        } onClick={() => handleClick("ray")}>
            {county.ray}
          </Button>
          <Button
            className={
          clickedItems.includes("miami")
            ? "county countyClicked"
            : "county"
        }
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
            className={
          clickedItems.includes("food")
          ? "businessType businessClicked"
          : "businessType"
        }
            onClick={() => handleClick("food")}
          >
            {businessType.food}
          </Button>
          <Button
            className={
          clickedItems.includes("coffee")
          ? "businessType businessClicked"
          : "businessType"
        }
            onClick={() => handleClick("coffee")}
          >
            {businessType.coffee}
          </Button>
          <Button
            className={
          clickedItems.includes("home goods")
          ? "businessType businessClicked"
          : "businessType"
        }
            onClick={() => handleClick("home goods")}
          >
            {businessType.homeGoods}
          </Button>
          <Button
            className={
          clickedItems.includes("clothing")
          ? "businessType businessClicked"
          : "businessType"
        }
            onClick={() => handleClick("clothing")}
          >
            {businessType.clothing}
          </Button>
          <Button
            className={
          clickedItems.includes("others")
            ? "businessType businessClicked"
            : "businessType"
        }
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
            className={
          clickedItems.includes("black")
          ? "ownerType ownerClicked"
          : "ownerType"
        }
            onClick={() => handleClick("black")}
          >
            {ownerType.black}
          </Button>
          <Button
            className={
          clickedItems.includes("lgbtqia")
          ? "ownerType ownerClicked"
          : "ownerType"
        }
            onClick={() => handleClick("lgbtqia")}
          >
            {ownerType.lgbtqia}
          </Button>
          <Button
            className={
          clickedItems.includes("woman")
          ? "ownerType ownerClicked"
          : "ownerType"
        }
            onClick={() => handleClick("woman")}
          >
            {ownerType.woman}
          </Button>
          <Button
            className={
          clickedItems.includes("inmigrant")
          ? "ownerType ownerClicked"
          : "ownerType"
        }
            onClick={() => handleClick("inmigrant")}
          >
            {ownerType.inmigrant}
          </Button>
          <Button
            className={
          clickedItems.includes("asian")
          ? "ownerType ownerClicked"
          : "ownerType"
        }
            onClick={() => handleClick("asian")}
          >
            {ownerType.asian}
          </Button>
          <Button
            className={
          clickedItems.includes("latino")
          ? "ownerType ownerClicked"
          : "ownerType"
        }
            onClick={() => handleClick("latino")}
          >
            {ownerType.latino}
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MobileAccordion;
