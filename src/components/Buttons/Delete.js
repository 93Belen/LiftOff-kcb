import { Button } from 'react-bootstrap';
import './Buttons.css';

export const Delete = () => {

    // on click uses fetch to send delete request



    return (
        <Button
        id='deleteButton'
        variant='outline-danger'>
            Delete
        </Button>
    )
}