import { Col, Container, Row, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectBusinesses, selectIsBusinessOwner, selectMyBusinesses } from "../../state-redux/Store/Selectors";
import { AddNew } from "../Buttons/AddNew";
import { CardComponent } from "../Card/CardComponent";
import { MyBusinessCard } from "../Card/myBusinessesCard";
import './CardsFeed.css';

export const MyBusinessFeed = () => {
    const myBusiesses = useSelector(selectMyBusinesses);

    console.log(myBusiesses);

    for(const business of myBusiesses){
        return <MyBusinessCard />
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
                <MyBusinessCard />
                <MyBusinessCard />
                <MyBusinessCard />
            </Stack>
        </Container>
    )
}