export const getLikedBusinesses = async(jwt) => {
    try{

        const response = await fetch("http://localhost:8080/api/user/getliked", {
            headers: {
                "Authorization": "Bearer " + jwt
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
