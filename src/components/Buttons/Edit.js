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
            //console.log(response)
           dispatch({type:'businessToEdit/changeState', payload: response})
            document.getElementById('business-name').value = response.name;
            document.getElementById('business-type').value = response.businessType.name;
            document.getElementById('county').value = response.businessLocation.county;
            document.getElementById('business-city').value = response.businessLocation.city;
            document.getElementById('zipcode').value = response.businessLocation.zipCode;
            // document.getElementById('address-description').value;
            document.getElementById('description').value = response.businessDetails.description;
            document.getElementById('website').value = response.businessDetails.websiteUrl;

            // document.getElementById('woman-owned').checked;
            // document.getElementById('black-owned').checked;
            // document.getElementById('latino-owned').checked;
            // document.getElementById('asian-owned').checked;
            // document.getElementById('inmigrant-owned').checked;
            // document.getElementById('lgbtqia-owned').checked;
    
        })
    }
    
    return (
        <Button
        onClick={onClick}
        onTouchEnd={onClick}
        id='likeButton'
        variant='outline-warning'>
            Edit
        </Button>
    )
}