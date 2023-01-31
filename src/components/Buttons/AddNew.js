import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './Buttons.css';

export const AddNew = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch({type: 'editingAdding/changeState', payload: 'adding'})
        dispatch({type: 'businessToEdit/changeState', payload: null})
    }

    return (
        <Button
        onClick={onClick}
        id='addNewButton'
        variant='outline-dark'
        >Add New</Button>
    )
}

