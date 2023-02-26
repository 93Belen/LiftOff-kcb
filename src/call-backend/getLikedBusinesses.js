const jwt = localStorage.getItem("jwt");

export const getLikedBusinesses = async () => {
    try {
        const response = await fetch("https://liftoff-kcb-backend-production.up.railway.app/api/users/me/liked-businesses", {
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