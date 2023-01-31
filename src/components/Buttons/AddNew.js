import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './Buttons.css';

export const AddNew = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch({type: 'editingAdding/changeState', payload: 'adding'})
        dispatch({type: 'businessToEdit/changeState', payload: null})
        document.getElementById('business-name').value = "";
            document.getElementById('business-type').value = "";
            document.getElementById('county').value = "";
            document.getElementById('business-city').value = "";
            document.getElementById('zipcode').value = "";
            // document.getElementById('address-description').value;
            document.getElementById('description').value = "";
            document.getElementById('website').value = "";
    }

    return (
        <Button
        onClick={onClick}
        id='addNewButton'
        variant='outline-dark'
        >Add New</Button>
    )
}

