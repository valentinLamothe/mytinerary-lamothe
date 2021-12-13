import React from 'react'   
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap'
import {  NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions';

const NavBar = (props) => {
  console.log('navbar:',props)
    return (
  <Navbar bg="dark" className="sticky-top" expand="lg">
        <Container>
          <div className="d-flex">
          <img className="rounded-circle img-fluid ms-3" width="45px" src="https://i.imgur.com/iDR677a.png" alt="user_pic"/>
          
          <NavDropdown id="basic-nav-dropdown">
          {props.userName ?
          <>
           <a className="signOut link-dark"onClick={()=> props.signOutUser()}> Sign out</a>
          </>
           :
           <>
            <Link to="/signIn" className="text-decoration-none"> <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item> </Link>
           <NavDropdown.Divider />
          <Link to="/signUp" className="text-decoration-none"> <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item> </Link>
          </>
          
            }
          </NavDropdown>
          
              <h5 className="text-light"> Hi {props.userName}</h5>
              </div>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <div className="d-flex">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Link to="/" className="link-color text-decoration-none nav-link"><i className="fas fa-home icon2"></i>Home</Link>
               <NavLink to="/cities" className="link-color text-decoration-none nav-link"><i className="fas fa-plane-departure icon2"></i>Cities</NavLink>
              </Nav>
            </Navbar.Collapse>
              </div>
        </Container>
</Navbar>
    )
}

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
    userName: state.authReducer.userName,
    userImage: state.authReducer.userImage
  }
}

const mapDispatchToProps ={
  signOutUser:authActions.signOutUser
}

export default connect(mapStateToProps, mapDispatchToProps) (NavBar)