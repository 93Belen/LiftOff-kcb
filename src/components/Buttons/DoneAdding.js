import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectJwt } from '../../state-redux/Store/Selectors';
import './Buttons.css';

export const DoneAdding = () => {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt)


    // USE THIS TO ADD INFO INTO REDUX (bussinesses & myBusiness)
    const dispatch = useDispatch();
    // dispatch({type:'businesses/changeState', payload: RESPONSE FROM CALLING BACKEND HERE})
    // dispatch({type:'myBusiness/changeState', payload: RESPONSE FROM CALLING BACKEND HERE})

    // Adds data to business table in database
    const onClick = () => {

    const businessName = document.getElementById('business-name').value;
    const businessType = document.getElementById('business-type').value;
    const county = document.getElementById('county').value;
    const city = document.getElementById('business-city').value;
    const zipcode = document.getElementById('zipcode').value;
    const addressDescription = document.getElementById('address-description').value;
    const description = document.getElementById('description').value;
    const website = document.getElementById('website').value;

    const woman = document.getElementById('woman-owned').checked;
    const black = document.getElementById('black-owned').checked;
    const latino = document.getElementById('latino-owned').checked;
    const asian = document.getElementById('asian-owned').checked;
    const inmigrant = document.getElementById('inmigrant-owned').checked;
    const lgbtqia = document.getElementById('lgbtqia-owned').checked;
    
    
    const owner = {
        woman: woman,
        black: black,
        latino: latino,
        asian: asian,
        inmigrant: inmigrant,
        lgbtqia: lgbtqia
    }


    const reqBody = {
        "name": "Brandon's Ice Cream Shop",
        "businessDetails": {
            "description": "A sweet spot that offers a variety of delicious ice cream flavors.",
            "websiteUrl": "brandonicecream.com"
        },
        "businessType": {
            "name": "Food & Beverage"
        },
        "ownerTypes": [
            {
                "name": "Latino"
            },
            {
                "name": "Immigrant"
            }
        ],
        "businessLocation": {
            "county": "Johnson",
            "city": "Overland Park",
            "state": "Kansas",
            "buildingNumber": "369",
            "streetName": "Metcalf Avenue",
            "zipCode": 66212
        }
    }

    const postInfo = async() => {
        try{

            const response = await fetch("http://localhost:8080/api/businesses", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + jwt
                },
                method: "post",
                body: JSON.stringify(reqBody)
            });
            if(response.ok){
                const jsonResponse = response.json();
                return jsonResponse;
            }
            else {
                console.log("auth failed");
            }
    
        } catch(e){
            console.log(e);
        }
    }

    postInfo()

    }
    



    return (
        <Button
        onClick={onClick}
        id='doneButton'
        variant='warning'
        >Add</Button>
    )
}