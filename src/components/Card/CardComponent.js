import { Card, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux";
import { selectIsBusinessOwner, selectSignedIn } from "../../state-redux/Store/Selectors";
import { AddNew } from "../Buttons/AddNew";
import { Delete } from "../Buttons/Delete";
import { Like } from "../Buttons/Like";
import { Edit } from '../Buttons/Edit'
import "./CardComponent.css";

export const CardComponent = (props) => {
    const isSignedIn = useSelector(selectSignedIn);
    const isBusinessOwner = useSelector(selectIsBusinessOwner);
    let buttons;

    if(isSignedIn){
        if(isBusinessOwner){
            if(!props.searchPage){
                buttons = [<Delete/>, <Edit />]
            }       
        }
        else {
            if(props.likedPage){
                buttons = <Delete />
            }
            else{
                buttons = <Like />
            }
        }
    }
    



    return (
        <Card id='cardComponent'>
            <Row>
                <Col><h2>Business name</h2></Col>
                <Col className='right-col'><a href='' target='_blank'>Websitelink.com</a></Col>
            </Row>
            <Row>
                <Col><p className='details'>Women owned</p></Col>
                <Col className='right-col details'><p>Coffee</p></Col>
            </Row>
            <Row>
                <Col><p>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col><p id='adress'>Adresss</p></Col>
                <Col className='right-col'>{buttons}</Col>
            </Row>
        </Card>
    )
}