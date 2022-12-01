import { Button } from "react-bootstrap"
import './Buttons.css';
import { useDispatch } from "react-redux";

// React Element => Sign-in Button
export const SignIn = () => {
    let dispatch = useDispatch();

    // on click event
    const handleClick = async() => {
        // Get email and password from the log-in form
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        // Put info in request body
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);

        try{
            // Post request
            const response = await fetch('http://localhost:8080/auth', {
            method: 'POST',
            body: data
            });
            // If post request is successful
            if(response.ok){
                try{
                    // Change Redux state to => Signed in
                    dispatch({type: 'signedIn', payload: true});

                    // Get info about user (is he a business owner)
                    const response = await fetch('http://localhost:8080/isBusinessOwner');
                    if(response.ok){
                        // Store true or false in Redux state??
                        const jsonResponse = response.json();
                        dispatch({type:'isBusinessOwner/setSate', payload: jsonResponse}) // Add then() with get request (if is business owner // if is not)
                    }
        
                }
                // if request for user info is unsuccessful: console.log error
                catch(e){
                    console.log(e);
                }
            }

        }
        // If log-in is unsuccessful: console.log error
        catch(e){
            console.log(e);
        }
        

    }


    return (
        <Button
        onClick={handleClick}
        id='signInButton'
        className='m-3 mb-0'
        variant='warning'
        >Sign in</Button>
    )
}