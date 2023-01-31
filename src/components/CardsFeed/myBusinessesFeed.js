import { Col, Container, Row, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import businesses from "../../state-redux/Slices/businesses";
import { selectMyBusinesses } from "../../state-redux/Store/Selectors";
import { AddNew } from "../Buttons/AddNew";
import { MyBusinessCard } from "../Card/myBusinessesCard";
import './CardsFeed.css';
import autoAnimate from '@formkit/auto-animate'
import { useRef, useEffect } from "react";


export const MyBusinessFeed = () => {
    let myBusinesses = useSelector(selectMyBusinesses);
    const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])


    const displayCards = () => {
        let arrayOfCards = [];
        for(const business of myBusinesses){
            arrayOfCards.push(<li style={{listStyle: 'none'}} key={business.id}><MyBusinessCard info={business} /></li>)
        }
        return arrayOfCards;
    }

    
 



    return (
        <Container id='feed'>
            <Row>
                <Col><h2 id='my-businesses-h2' style={{fontSize: 24}}>My Businesses</h2></Col>
                <Col><AddNew /></Col>
            </Row>
            <Stack
            gap={4}
            ref={parent}
            direction='vertical'>
                {displayCards()}
            </Stack>
        </Container>
    )
}