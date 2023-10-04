import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../reslogo.jpg'

function Header() {
  return (
    <>
    
      <Navbar className="bg-primary" >
        <Container>
          <Navbar.Brand  href="/" className='text-white' >
            <img 
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            The Art of Food
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
