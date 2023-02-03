import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Buttons.css";

export const Like = (props) => {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  let id = props.id;

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
        if (response.ok) {
          const data = await response.json();
          console.log("Response was ok!", data);
          dispatch({ type: "liked/changeState", payload: data });
        }
      } catch (e) {
        console.log(e);
      }
    };

    likeBusiness();
  };

  return (
    <Button onClick={onClickLike} id="likeButton" variant="outline-warning">
      Like
    </Button>
  );
};
