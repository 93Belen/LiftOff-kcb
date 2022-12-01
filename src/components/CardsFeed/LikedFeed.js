import { Col, Container, Row, Stack } from "react-bootstrap";
import { CardComponent } from "../Card/CardComponent";
import './CardsFeed.css';

export const LikedFeed = () => {
    return (
        <Container id='feedLiked'>
            <Stack
            gap={4}
            direction='vertical'>
                <Row>
                    <Col><CardComponent likedPage={true} /></Col>
                    <Col><CardComponent likedPage={true} /></Col>
                </Row>
                <Row>
                    <Col><CardComponent likedPage={true} /></Col>
                    <Col><CardComponent likedPage={true} /></Col>
                </Row>
                <Row>
                    <Col><CardComponent likedPage={true} /></Col>
                    <Col><CardComponent likedPage={true} /></Col>
                </Row>
            </Stack>
        </Container>
    )
}