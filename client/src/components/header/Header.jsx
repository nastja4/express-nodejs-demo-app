/* eslint-disable react/prop-types */
import { Container, Nav, Navbar } from "react-bootstrap";
import "./header.scss";
import { Link } from "react-router-dom";
import React from "react";

const Header = ({ userInfo, logoutUser }) => {
  const handleLogout = () => {
    console.log("called");
    logoutUser();
  };
  return (
    <div className="header">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="menu-items">
            <div className="left">
              <Link to="/" className="nav-link">
                Home
              </Link>
              {userInfo && (
                <Link to="/add-todo" className="nav-link">
                  Add Todo
                </Link>
              )}
              {!userInfo && (
                //  React.Fragment - only the Link component is rendered without any additional HTML element
                <React.Fragment>
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </React.Fragment>
              )}
            </div>
            <div className="right">
              <div className="nav-link">
                Welcome, {userInfo ? userInfo.user.name : "Guest"}
              </div>
              {userInfo && (
                <a href="/#" onClick={handleLogout} className="nav-link">
                  Logout
                </a>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
