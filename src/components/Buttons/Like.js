import { Button } from "react-bootstrap"
import './Buttons.css';

export const Like = () => {

    // USE THIS TO CHANGE LIKED IN REDUX
     // dispatch({type:'liked/changeState', payload: RESPONSE FROM CALLING BACKEND HERE})




    // On Click it needs to get the business id by props and add to liked database

    
    return (
        <Button
        id='likeButton'
        variant='outline-warning'>
            Like
        </Button>
    )
}