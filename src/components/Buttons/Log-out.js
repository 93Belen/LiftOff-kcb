import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router";



export const LogOut = () => {
    const dispatch = useDispatch();

    const logOut = () => {
        
    }


    return (
        <Button
        onClick={logOut}
        id='log-out'
        variant='dark'
        >
        <svg width="20" viewBox="0 0 101 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38.728 33.0118C28.187 35.9117 19.0444 42.6092 13.0046 51.8559C6.9649 61.1025 4.44028 72.2672 5.90143 83.2684C7.36258 94.2697 12.7098 104.357 20.9461 111.649C29.1825 118.941 39.7459 122.941 50.6669 122.902C61.588 122.863 72.1214 118.789 80.3033 111.439C88.4852 104.089 93.7572 93.9648 95.1365 82.9535C96.5157 71.9423 93.9081 60.7957 87.7998 51.5919C81.6914 42.3881 72.4992 35.7553 61.9369 32.9299" stroke="#FABD38" stroke-width="8"/>
    <line x1="50" y1="5" x2="50" y2="76" stroke="#FABD38" stroke-width="6" stroke-linecap="round"/>
        </svg>
        </Button>
    )
}