import { Button } from 'react-bootstrap';
import './Buttons.css';
import { useDispatch } from 'react-redux';

export const DoneEditing = () => {

    // USE THIS TO CHANGE INFO IN REDUX (bussinesses & myBusiness)
    const dispatch = useDispatch();
    // dispatch({type:'businesses/changeState', payload: RESPONSE FROM CALLING BACKEND HERE})
    // dispatch({type:'myBusiness/changeState', payload: RESPONSE FROM CALLING BACKEND HERE})
    // dispatch({type:'liked/changeState', payload: RESPONSE FROM CALLING BACKEND HERE})





    return (
        <Button
        id='doneButton'
        variant='warning'
        >Done</Button>
    )
}