import { HeaderSearcher } from "../Header/HeaderSearcher"
import { Body } from "../Body/Body"
import './Searcher.css';
import { useDispatch, useSelector } from "react-redux";
import { selectJwt } from "../../state-redux/Store/Selectors";
import { getBusinessFromBackEnd } from "../../call-backend/getAllBusinesses";
export const Searcher = () => {
    const dispatch = useDispatch();
    // fetch all businesses here and store them in redux
    getBusinessFromBackEnd().then(response => dispatch({type: 'businesses/changeState', payload: response}));
    return (
        <div id='searcher'>
            <HeaderSearcher />
            <Body />
        </div>
    )
}