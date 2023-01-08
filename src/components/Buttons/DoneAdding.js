import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './Buttons.css';

export const DoneAdding = () => {

    // USE THIS TO ADD INFO INTO REDUX (bussinesses & myBusiness)
    const dispatch = useDispatch();
    // dispatch({type:'businesses/changeState', payload: RESPONSE FROM CALLING BACKEND HERE})
    // dispatch({type:'myBusiness/changeState', payload: RESPONSE FROM CALLING BACKEND HERE})



    return (
        <Button
        id='doneButton'
        variant='warning'
        >Done</Button>
    )
}