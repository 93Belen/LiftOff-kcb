import { Col, Container, Row, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectBusinesses, selectIsBusinessOwner } from "../../state-redux/Store/Selectors";
import { AddNew } from "../Buttons/AddNew";
import { CardComponent } from "../Card/CardComponent";
import { MyBusinessCard } from "../Card/myBusinessesCard";
import './CardsFeed.css';

export const MyBusinessFeed = () => {



    return (
        <Container id='feed'>
            <Row>
                <Col><h2 style={{fontSize: 24}}>My Businesses</h2></Col>
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