import autoAnimate from '@formkit/auto-animate'
import { useRef, useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { selectLiked } from '../../state-redux/Store/Selectors';
import { CardComponent } from "../Card/CardComponent";
import { LikedCard } from "../Card/likedCard";
import './CardsFeed.css';

export const LikedFeed = () => {
    const jwt = localStorage.getItem("jwt");
    const dispatch = useDispatch();
    let businesses = useSelector(selectLiked);
    const [arrayOfCards, setArrayOfCards] = useState();

    const getLikedBusinesses = async() => {
        try {
            const response = await fetch("http://localhost:8080/api/users/me/liked-businesses", {
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
    
    const displayCards = (response) => {
        let list = [];
        for(const business of response){
        list.push(<li style={{listStyle: 'none', paddingBottom: '2%'}} key={business.id}><Col><LikedCard info={business} /></Col></li>)
        }
       return list;
    }
    useEffect(() => {
        getLikedBusinesses().then(response => dispatch({type:'liked/changeState', payload: response}))
        
    }, [])

    const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])





    return (
        <Container id='feedLiked'>
                <Row lg={2} xs={2} ref={parent}>{displayCards(businesses)}</Row>
        </Container>
    )
}