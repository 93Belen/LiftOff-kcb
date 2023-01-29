import { Col, Container, Row, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import businesses from "../../state-redux/Slices/businesses";
import { selectMyBusinesses } from "../../state-redux/Store/Selectors";
import { AddNew } from "../Buttons/AddNew";
import { MyBusinessCard } from "../Card/myBusinessesCard";
import './CardsFeed.css';

export const MyBusinessFeed = () => {
    let myBusinesses = useSelector(selectMyBusinesses)
    console.log(myBusinesses);
    const displayCards = () => {
        let arrayOfCards = [];
        for(const business of myBusinesses){
            arrayOfCards.push(<MyBusinessCard info={business} />)
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
            direction='vertical'>
                {displayCards()}
            </Stack>
        </Container>
    )
}