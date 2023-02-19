import { Button } from 'react-bootstrap';
import './Buttons.css';
import { useDispatch } from 'react-redux';

export const DeleteLiked = (props) => {
    const jwt = localStorage.getItem("jwt");
    const dispatch = useDispatch();
    let id = props.id;
    const getLikedBusinesses = async() => {
        try {
            const response = await fetch("https://liftoff-kcb-backend-maven-production.up.railway.app/api/users/me/liked-businesses", {
                headers: {
                    "Content-type": "application/json",
                    "Cache-Control": "no-cache",
                    "Authorization": "Bearer " + jwt
                },
            });
                if(response.ok){
                    const jsonResponse = response.json();
                    return jsonResponse;
                }
            } catch (e) {
            console.log(e)
        }
    }
    const unlike = async() => {
        try{

            const response = await fetch(`https://liftoff-kcb-backend-maven-production.up.railway.app/api/businesses/${id}/like`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + jwt
                },
                method: "DELETE",
            });
            if(response.ok){
                console.log("Deleted");
            }
            else {
                console.log("auth failed");
            }
    
        } catch(e){
            console.log(e);
        }
    }
    const onClick = () => unlike().then(response => getLikedBusinesses()).then(response => dispatch({type:'liked/changeState', payload: response}));


    return (
        <Button
        onClick={onClick}
        onTouchEnd={onClick}
        id='deleteButton'
        variant='outline-danger'>
            Delete
        </Button>
    )
}