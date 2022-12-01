import { HeaderSearcher } from "../Header/HeaderSearcher"
import { Body } from "../Body/Body"
import './Searcher.css';
export const Searcher = () => {
    return (
        <div id='searcher'>
            <HeaderSearcher />
            <Body />
        </div>
    )
}