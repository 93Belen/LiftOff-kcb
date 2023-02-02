import { Container, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectBusinesses, selectIsBusinessOwner } from "../../state-redux/Store/Selectors";
import { AddNew } from "../Buttons/AddNew";
import { CardComponent } from "../Card/CardComponent";
import './CardsFeed.css';

export const CardsFeed = () => {
 

    // Info to be displayed (Map-form filters allSlice and add it to displayedSlice)
    const businesses = useSelector(selectBusinesses);

    console.log(businesses);




    return (
        <Container id='feed'>
            <Stack
            gap={4}
            direction='vertical'>
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </Stack>
        </Container>
    )
}