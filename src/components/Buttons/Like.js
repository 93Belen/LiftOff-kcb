import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./Buttons.css";
import jwt_decode from "jwt-decode";

export const Like = (props) => {
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  let id = props.id;
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

        //When clicking like getting error - SyntaxError: Unexpected end of JSON input - Response from server {type: 'cors', url: 'http://localhost:8080/api/businesses/1/like', redirected: false, status: 204, ok: true, …} The likes are appearing in the database
        if (response.status !== 204) {
          const data = await response.json();
          console.log("Response was ok!", data);
          dispatch({ type: "liked/changeState", payload: data });
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    likeBusiness();
  };

  return (
    <Button
      onTouchEnd={onClickLike}
      onClick={onClickLike}
      id="likeButton"
      variant="outline-warning"
    >
      Like
    </Button>
  );
};
