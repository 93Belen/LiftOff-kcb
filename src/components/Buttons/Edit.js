import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux";
import './Buttons.css';

export const Edit = (props) => {
    const dispatch = useDispatch();
    let id = props.id;
    let jwt = localStorage.getItem('jwt');


    const onClick = () => {
        dispatch({type: 'editingAdding/changeState', payload: 'editing'})
        const getBusinessToEdit = async() => {
            try {
                const response = await fetch(`http://localhost:8080/api/businesses/${id}`, {
                    headers: {
                        "Content-type": "application/json",
                        "Cache-Control": "no-cache",
                        "Authorization": "Bearer " + jwt
                    }
                });
                    if(response.ok){
                        const jsonResponse = response.json();
                        return jsonResponse;
                    }
                } catch (e) {
                console.log(e)
            }
        }
        getBusinessToEdit().then(response => {
            console.log(response)
           dispatch({type:'businessToEdit/changeState', payload: response})
        })
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