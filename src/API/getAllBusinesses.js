export const getAllBusinesses = async(jwt) => {
    try{

        const response = await fetch("http://localhost:8080/api/business/getall", {
            headers: {
                "Authorization": jwt
            }
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
