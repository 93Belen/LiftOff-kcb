import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Buttons.css";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { selectLiked } from "../../state-redux/Store/Selectors";
import { getLikedBusinesses } from "../../call-backend/getLikedBusinesses";

export const Like = (props) => {
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  let id = props.id;
  let likedBusinesses = useSelector(selectLiked);

  let navigate = useNavigate();
  // Decode jwt to get expiration date (set to one hour)
  const d = new Date(0);
  try {
    const decoded = jwt_decode(jwt);
    d.setUTCSeconds(decoded.exp);
  } catch (e) {
    console.log(e);
  }

  // Get current time
  const now = new Date();
  const [liked, setLiked] = useState();

  useEffect(() => {
    // update the 'liked' state based on the the currently selected business id existing in the likedBusinesses array
    let liked;
    if (likedBusinesses.length) {
      liked = likedBusinesses?.filter((business) => business.id === id);
    }

    if (jwt !== null) {
      setLiked(liked?.length > 0);
    } else {
      setLiked(false);
    }
  }, [likedBusinesses, id, jwt]);

  const onClickLike = () => {
    if (jwt === null) {
      navigate("/login", { replace: true });
    } else if (now > d) {
      navigate("/login", { replace: true });
    }

    const likeBusiness = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/businesses/${id}/like`,
          {
            headers: {
              "Content-type": "application/json",
              "Cache-Control": "no-cache",
              Authorization: "Bearer " + jwt,
            },
            method: "POST",
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        getLikedBusinesses().then((response) => {
          dispatch({ type: "liked/changeState", payload: response });
        });
        setLiked(true);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    likeBusiness();
  };

  const onClickUnlike = () => {
    if (jwt === null) {
      navigate("/login", { replace: true });
    } else if (now > d) {
      navigate("/login", { replace: true });
    }

    const unlikeBusiness = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/businesses/${id}/like`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt,
            },
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        getLikedBusinesses().then((response) => {
          dispatch({ type: "liked/changeState", payload: response });
        });

        setLiked(false);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    unlikeBusiness();
  };

  return (
    <Button
      onTouchEnd={liked ? onClickUnlike : onClickLike}
      onClick={liked ? onClickUnlike : onClickLike}
      id="likeButton"
      variant={liked ? "warning" : "outline-warning"}
    >
      {liked ? "Liked" : "Like"}
    </Button>
  );
};
