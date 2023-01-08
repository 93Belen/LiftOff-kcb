import { Button } from 'react-bootstrap';
import './Buttons.css';
import { useDispatch } from 'react-redux';

export const DeleteLiked = () => {

    // USE THIS TO CHANGE INFO IN REDUX (bussinesses & myBusiness)
    const dispatch = useDispatch();
    // dispatch({type:'liked/changeState', payload: RESPONSE FROM CALLING BACKEND HERE})


    // on click uses fetch to send delete request



    return (
        <Button
        id='deleteButton'
        variant='outline-danger'>
            Delete
        </Button>
    )
}