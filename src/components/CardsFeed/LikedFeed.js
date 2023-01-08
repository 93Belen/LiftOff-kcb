import { Col, Container, Row, Stack } from "react-bootstrap";
import { CardComponent } from "../Card/CardComponent";
import { LikedCard } from "../Card/likedCard";
import './CardsFeed.css';

export const LikedFeed = () => {
    return (
        <Container id='feedLiked'>
            <Stack
            gap={4}
            direction='vertical'>
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
            </Stack>
        </Container>
    )
}