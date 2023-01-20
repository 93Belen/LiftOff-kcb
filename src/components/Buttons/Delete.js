import { Button } from 'react-bootstrap';
import './Buttons.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectJwt } from '../../state-redux/Store/Selectors';

export const Delete = () => {
    const jwt = localStorage.getItem("jwt");

    // USE THIS TO CHANGE INFO IN REDUX (bussinesses & myBusiness)
    const dispatch = useDispatch();
    // dispatch({type:'businesses/changeState', payload: RESPONSE FROM CALLING BACKEND HERE})
    // dispatch({type:'myBusiness/changeState', payload: RESPONSE FROM CALLING BACKEND HERE})
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