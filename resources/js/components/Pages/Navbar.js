import React from 'react'
import { GiWorld} from 'react-icons/Gi';
import {    AiOutlineDashboard , AiOutlineSearch} from 'react-icons/Ai';

import {Nav,NavDropdown, Navbar, Form , FormControl , Button } from 'react-bootstrap';
import Axios from 'axios';
class Navbarr extends React.Component{

    constructor(props){
        super(props)

        this.handleLogout = this.handleLogout.bind(this)
    }
    
    handleLogout() {

        Axios.post( './logout' )
        .then( window.location.reload() )
    }

    render(){

        return(
 <div style={{marginLeft:'250px'}}>
        <Navbar bg="light" expand="lg" sticky="top" fixed="top">
            <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home"> <AiOutlineDashboard size='1.7em' />  </Nav.Link>
               
                <NavDropdown title={<GiWorld    size='1.5em'    />    }  id="basic-nav-dropdown">
                             
                   <NavDropdown.Item href="#action/3.1">Notification</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Notification2</NavDropdown.Item>
                 
                </NavDropdown>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary"> <AiOutlineSearch size='1.4em' />  </Button>
                </Form>
                </Nav>
            <Nav>
                <Nav.Link href="/dashboard">Account</Nav.Link>
                <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


            </div>
        )
    }
}
export default Navbarr ;