import { Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

export const NavBarSearcher = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('jwt')
    localStorage.removeItem('role')
    navigate("/login", {replace: true})
  }
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 900;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakpoint) {
    return (
      <div className="navDiv">
        <Stack id="navBarSearcher" direction="horizontal" className="m-4">
          <NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/user/home"
          >
            Search
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/user/liked"
          >
            Liked
          </NavLink>
        </Stack>
      </div>
    );
  } else {
    return (
      <Button id='drop-down-button' variant="secondary" align="start">
        <NavDropdown
          title={<svg width="51" height="30" viewBox="0 0 51 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="2.15054" y1="2.8999" x2="48.1505" y2="2.8999" stroke="#F8F6F5" stroke-width="4" stroke-linecap="round"/>
          <line x1="2.15054" y1="12.8999" x2="48.1505" y2="12.8999" stroke="#F8F6F5" stroke-width="4" stroke-linecap="round"/>
          <line x1="2.15054" y1="22.8999" x2="48.1505" y2="22.8999" stroke="#F8F6F5" stroke-width="4" stroke-linecap="round"/>
          </svg>}
          id="collasible-nav-dropdown"
          class="dropdownLink"
          menuVariant="dark"
        >
          <NavDropdown.Item>
          <NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/user/home"
          >
            Search
          </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
          <NavLink
            className={({ isActive }) => (isActive ? "navLinkAct" : "navLink")}
            to="/user/liked"
          >
            Liked
          </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Button>
    );
  }
};
