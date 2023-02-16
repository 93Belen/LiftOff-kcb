import { useDispatch } from "react-redux";
import { BodyBusinessOwner } from "../Body/BodyBusinessOwner"
import { HeaderBusiness } from "../Header/HeaderBusinessOwner"
import { getBusinessFromBackEnd } from "../../call-backend/getAllBusinesses";


export const BusinessOwner = () => {
    const dispatch = useDispatch();

    let jwt = localStorage.getItem("jwt");

    const getOwnedBusinesses = async() => {
        try {
            const response = await fetch("https://liftoff-kcb-backend-maven-production.up.railway.app/api/users/me/owned-businesses", {
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

    getOwnedBusinesses().then(response => dispatch({type:'myBusiness/changeState', payload: response}))

    return (
        <div id='businessOwner'>
           <HeaderBusiness />
            <BodyBusinessOwner />
        </div>
    )
}