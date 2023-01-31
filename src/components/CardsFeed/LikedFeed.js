import autoAnimate from '@formkit/auto-animate'
import { useRef, useEffect } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { CardComponent } from "../Card/CardComponent";
import { LikedCard } from "../Card/likedCard";
import './CardsFeed.css';

export const LikedFeed = () => {
    const jwt = localStorage.getItem("jwt");

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
    let arrayOfCards = [];
    const displayCards = (response) => {
        
        for(const business of response){
            arrayOfCards.push(<li style={{listStyle: 'none'}} key={business.id}><LikedCard info={business} /></li>)
        }
        return arrayOfCards;
    }

    getLikedBusinesses().then(response => displayCards(response));
    const parent = useRef(null);
    console.log(arrayOfCards);

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])





    return (
        <Container ref={parent} id='feedLiked'>
                {arrayOfCards}
        </Container>
    )
}