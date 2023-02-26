import { Button } from "react-bootstrap";
import "./Buttons.css";
import { useDispatch } from "react-redux";
import React from "react";
import { useNavigate } from "react-router";

// React Element => Sign-in Button
export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // on click event
  const handleClick = () => {
    // Get email and password from the log-in form
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Put info in request body
    const reqBody = {
      username: email,
      password: password,
    };

    const callBackEndAuth = async () => {
      try {
        const response = await fetch("https://liftoff-kcb-backend-production.up.railway.app/api/auth/login", {
          headers: {
            "Content-type": "application/json",
          },
          method: "post",
          body: JSON.stringify(reqBody),
        });
        if (response.ok) {
          const jsonResponse = response.json();
          return jsonResponse;
        } else {
          console.log("auth failed");
          window.alert("Wrong password or email");
        }
      } catch (e) {
        console.log(e);
      }
    };

    const getUserInfo = async (jwt) => {
      const auth = "Bearer " + jwt.payload.accessToken;
      console.log(auth);
      try {
        const response = await fetch(
          "https://liftoff-kcb-backend-production.up.railway.app/api/users/me/roles",
          {
            headers: {
              "Content-type": "application/json",
              "Cache-Control": "no-cache",
              Authorization: auth,
            },
            method: "get",
          }
        );
        if (response.ok) {
          const jsonResponse = response.json();
          return jsonResponse;
        } else {
          console.log("jwt failed");
        }
      } catch (e) {
        console.log(e);
      }
    };

    callBackEndAuth()
      .then((response) => {
        localStorage.setItem("jwt", response["accessToken"]);
        return dispatch({ type: "jwt/changeState", payload: response });
      })
      .then((response) => getUserInfo(response))
      .then((response) => {
        const userRole = response.roles[0].name;
        if (userRole === "USER") {
          localStorage.setItem("role", "user");
          dispatch({ type: "loginInfo/changeState", payload: "user" });
          navigate("/user/home", { replace: true });
          window.location.reload();
        } else if (userRole === "OWNER") {
          localStorage.setItem("role", "owner");
          dispatch({ type: "loginInfo/changeState", payload: "owner" });
          navigate("/businessowner/home", { replace: true });
          window.location.reload();
        }
      });
  };

  return (
    <Button
      onClick={handleClick}
      onTouchEnd={handleClick}
      id="signInButton"
      className="m-3 mb-0"
      variant="warning"
    >
      Sign in
    </Button>
  );
};
