import { Col, Container, Row, Stack } from "react-bootstrap";
import { CardComponent } from "../Card/CardComponent";
import { LikedCard } from "../Card/likedCard";
import './CardsFeed.css';

export const LikedFeed = () => {
    return (
        <Container id='feedLiked'>
                <Row>
                    <Col><LikedCard /></Col>
                    <Col><LikedCard /></Col>
                </Row>
                <Row>
                    <Col><LikedCard /></Col>
                    <Col><LikedCard /></Col>
                </Row>
                <Row>
                    <Col><LikedCard /></Col>
                    <Col><LikedCard /></Col>
                </Row>
        </Container>
    )
}