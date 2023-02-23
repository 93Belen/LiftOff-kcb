import { Button } from 'react-bootstrap';
import './Buttons.css';
import { useDispatch } from 'react-redux';


export const Delete = (props) => {
    const jwt = localStorage.getItem("jwt");
    let id = props.id;
    const dispatch = useDispatch();


    const onClickDelete = () => {
        const deleteBusiness = async() => {
            try {
                const response = await fetch(`http://localhost:8080/api/businesses/${id}`, {
                    headers: {
                        "Content-type": "application/json",
                        "Cache-Control": "no-cache",
                        "Authorization": "Bearer " + jwt
                    },
                    method: 'DELETE'
                });
                    if(response.ok){
                        console.log('Response was ok!')
                    }
                } catch (e) {
                console.log(e)
            }
        }

        const getOwnedBusinesses = async() => {
            try {
                const response = await fetch("http://localhost:8080/api/users/me/owned-businesses", {
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






        deleteBusiness().then(()=> getOwnedBusinesses()).then(response => dispatch({type:'myBusiness/changeState', payload: response}))
    }
    


    // on click uses fetch to send delete request



    return (
        <Button
        onClick={onClickDelete}
        onTouchEnd={onClickDelete}
        id='deleteButton'
        variant='outline-danger'>
            Delete
        </Button>
    )
}