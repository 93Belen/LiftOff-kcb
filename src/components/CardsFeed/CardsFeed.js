import { Container, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectDisplayed, selectIsBusinessOwner, selectSignedIn } from "../../state-redux/Store/Selectors";
import { AddNew } from "../Buttons/AddNew";
import { CardComponent } from "../Card/CardComponent";
import './CardsFeed.css';

export const CardsFeed = (props) => {
    const isBusinessOwner = useSelector(selectIsBusinessOwner);
    const isSignedIn = useSelector(selectSignedIn);

    // Info to be displayed (Map-form filters allSlice and add it to displayedSlice)
    const display = useSelector(selectDisplayed);

    let addButton;

    if(isBusinessOwner && isSignedIn && !props.searchPage){
        addButton = <AddNew />
    }


    return (
        <Container id='feed'>
            {addButton}
            <Stack
            gap={4}
            direction='vertical'>
                <CardComponent searchPage={props.searchPage} />
                <CardComponent searchPage={props.searchPage} />
                <CardComponent searchPage={props.searchPage} />
            </Stack>
        </Container>
    )
}