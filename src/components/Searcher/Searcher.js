import { HeaderSearcher } from "../Header/HeaderSearcher"
import { Body } from "../Body/Body"
import './Searcher.css';
import { useDispatch, useSelector } from "react-redux";
import { selectJwt } from "../../state-redux/Store/Selectors";
export const Searcher = () => {
    return (
        <div id='searcher'>
            <HeaderSearcher />
            <Body />
        </div>
    )
}