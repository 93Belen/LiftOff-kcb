import { Button } from 'react-bootstrap';
import './Buttons.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectbusinessToEdit, selectJwt } from '../../state-redux/Store/Selectors';

export const DoneEditing = () => {
    const jwt = localStorage.getItem("jwt");
    const businessToEdit = useSelector(selectbusinessToEdit);
    const dispatch = useDispatch();

    const onClickEdit = () => {


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
            "buildingNumber": null,
            "streetName": null,
            "zipCode": Number(zipcode)
        }
    }

    const updateInfo = async() => {
        try{

            const response = await fetch("http://localhost:8080/api/businesses", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + jwt
                },
                method: "put",
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
    updateInfo();

    }






    return (
        <Button
        onClick={onClickEdit}
        id='doneButton'
        variant='warning'
        >Edit</Button>
    )
}