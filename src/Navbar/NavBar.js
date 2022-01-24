import React from 'react'
  
//import {Container, Nav,NavDropdown,Navbar} from 'react-bootstrap' //aka trayendo toda la libreria de  react-bootstrap /'Muy pesado'
import Navbar from 'react-bootstrap/Navbar'  //de es forma solo estoy trayendo un componente a la vez de  la libreria /RECOMENDABLE 'Mas liviano'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
//import NavDropdown from 'react-bootstrap/NavDropdown'
 import logo from '../imagenes/logotipo.png'

 import '../App.css'
function NavBar() {
  
  const {contarItem} = useContext(CartContext)
 

    return ( 
     
        
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Link to="/">
  <Navbar.Brand>
   <img src={logo} alt='logotipo' className='logotipo'/>
 </Navbar.Brand>
 </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Link to="/categoria/pesas">
      <Nav.Link href="#features">PESAS</Nav.Link>
      </Link>

      <Link to="/categoria/ligas">
      <Nav.Link href="#pricing">LIGAS</Nav.Link>
      </Link>
       

       <Link to="/categoria/barras">
       <Nav.Link href="#pricing">BARRAS</Nav.Link>
       </Link>
     
      
      {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>*/}
    </Nav>
   
    <Nav>
      <span  style={{color: 'red'}}>{contarItem()}</span>
      <Link to="/cart">
      <CartWidget/>
      </Link>
          
    
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        
    )
}

export default NavBar
