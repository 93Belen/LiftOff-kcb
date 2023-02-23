import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './Buttons.css';

export const DoneAdding = (props) => {
    let disabled = props.disabled
    console.log(disabled);
    const jwt = localStorage.getItem("jwt");
    const dispatch = useDispatch();

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
    const immigrant = document.getElementById('inmigrant-owned').checked;
    const lgbtqia = document.getElementById('lgbtqia-owned').checked;
    
    
    const owner = {
        woman: ["Woman", woman],
        black: ["Black", black],
        latino: ["Latino", latino],
        asian: ["Asian", asian],
        inmigrant: ["Immigrant", immigrant],
        lgbtqia: ["LGBTQIA", lgbtqia]
    }


    // Get ownerTypes in needed format
    let ownerTypeToSend = [];

    for(const ownerType in owner){
        if(owner[ownerType][1] === true){
            ownerTypeToSend.push({
                name: owner[ownerType][0]
            })
        }
    }

    // Body
    const reqBody = {
        "name": businessName,
        "businessDetails": {
            "description": description,
            "websiteUrl": website
        },
        "businessType": {
            "name": businessType
        },
        "ownerTypes": ownerTypeToSend,
        "businessLocation": {
            "county": county,
            "city": city,
            "state": null,
            "streetAddress": addressDescription,
            "zipCode": Number(zipcode)
        }
    }

    // Post Request
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

    const getOwnedBusinesses = async() => {
        try {
            const response = await fetch("http://localhost:8080/api/users/me/owned-businesses", {
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



    postInfo().then(()=> getOwnedBusinesses()).then(response => dispatch({type:'myBusiness/changeState', payload: response}))

    

    }
    



    return (
        <Button
        disabled={disabled}
        onClick={onClick}
        onTouchEnd={onClick}
        id='doneButton'
        variant='warning'
        >Add</Button>
    )
}