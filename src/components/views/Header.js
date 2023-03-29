import { Navbar } from "react-bootstrap";
import {Container} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";



const Header =() =>{
    return(
        // <Navbar>
        //      <div>Waiter.app</div>
        //      <div>Home</div>
        // </Navbar>

        <Navbar  bg='primary' variant="dark" className='mt-4 mb-4' >
        <Container>
          <Navbar.Brand href="#home">Waiter.app</Navbar.Brand>
          <Nav className="me-auto, justify-content-end">
            {/* <Nav.Link  href="#link">Home</Nav.Link> */}
            <Navbar.Brand href="#">Home</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
        
    )
}
export default Header