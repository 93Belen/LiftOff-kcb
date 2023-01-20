import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux";
import './Buttons.css';

export const Edit = () => {
    const dispatch = useDispatch();


    const onClick = () => {
        dispatch({type: 'editingAdding/changeState', payload: 'editing'})
    }
    
    return (
        <Button
        onClick={onClick}
        id='likeButton'
        variant='outline-warning'>
            Edit
        </Button>
    )
}