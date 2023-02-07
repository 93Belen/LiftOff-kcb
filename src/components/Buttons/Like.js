import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Buttons.css";

export const Like = (props) => {
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  let id = props.id;
  let navigate = useNavigate();

  const onClickLike = () => {
    if (jwt === null) {
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
    <Button onTouchEnd={onClickLike} onClick={onClickLike} id="likeButton" variant="outline-warning">
      Like
    </Button>
  );
};
