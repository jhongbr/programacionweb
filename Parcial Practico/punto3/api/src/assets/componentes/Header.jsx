import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = ({flag, setFlag}) => {

  const changeFlag = ()=> setFlag(!flag)
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Punto 3</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={changeFlag}>Home</Nav.Link>
            <Nav.Link onClick={changeFlag}>Add nueva persona</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
