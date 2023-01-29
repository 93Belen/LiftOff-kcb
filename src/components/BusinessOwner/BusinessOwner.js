import { useDispatch } from "react-redux";
import { BodyBusinessOwner } from "../Body/BodyBusinessOwner"
import { HeaderBusiness } from "../Header/HeaderBusinessOwner"


export const BusinessOwner = () => {

    let jwt = localStorage.getItem("jwt");
    let dispatch = useDispatch();

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

    getOwnedBusinesses().then(response => dispatch({type:'myBusiness/changeState', payload: response}))

    return (
        <div id='businessOwner'>
           <HeaderBusiness />
            <BodyBusinessOwner />
        </div>
    )
}