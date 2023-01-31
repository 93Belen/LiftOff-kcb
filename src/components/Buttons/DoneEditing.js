import { Button } from 'react-bootstrap';
import './Buttons.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectJwt } from '../../state-redux/Store/Selectors';

export const DoneEditing = () => {
    const jwt = localStorage.getItem("jwt");
    const dispatch = useDispatch();





    return (
        <Button
        id='doneButton'
        variant='warning'
        >Edit</Button>
    )
}