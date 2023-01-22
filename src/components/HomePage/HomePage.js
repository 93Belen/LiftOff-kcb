import { BodyHomePage } from "../Body/BodyHomePage";
import { HeaderHomePage } from "../Header/HeaderHomePage";

export const HomePage = () => {
    // fetch all businesses here and store them in redux
    const postInfo = async() => {
        try{

            const response = await fetch("http://localhost:8080/api/businesses");
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

    const response = postInfo();
    console.log(response)


    return (
        <div id='homepage'>
            <HeaderHomePage />
            <BodyHomePage />
        </div>
    )
}

