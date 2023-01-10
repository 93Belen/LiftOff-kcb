import { Button } from "react-bootstrap"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectJwt } from "../../state-redux/Store/Selectors";
import './Buttons.css';

export const Like = () => {
    const navigate = useNavigate();
    // USE THIS TO CHANGE LIKED IN REDUX
     // dispatch({type:'liked/changeState', payload: RESPONSE FROM CALLING BACKEND HERE})
     const jwt = localStorage.getItem("jwt");

    const onClick = () => {
        // If it's not logged in -> redirect to Log-in form
        if(jwt === null){
            navigate('/user/', {replace: true})
        }


    }



    // On Click it needs to get the business id by props and add to liked database

    
    return (
        <Button
        onClick={onClick}
        id='likeButton'
        variant='outline-warning'>
            Like
        </Button>
    )
}