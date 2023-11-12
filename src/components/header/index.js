import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import basket from '../../assests/images/basket.svg'
import { useSelector } from 'react-redux';


function Header({setShowPorductsModal}) {
  const product = useSelector((state) => state.product);
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{height:'90px',width:'99%',margin:'4px auto',borderRadius:'10px',
    backgroundColor: "#5b6467",
    backgroundImage: "linear-gradient(315deg, #5b6467 0%, #8b939a 74%)"}} >
      <Container>
        <Navbar.Brand href="#home">AdbAlsalam</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Cakes</Nav.Link>
            <Nav.Link href="#pricing">Manakish</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              About Us
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{position:'relative'}} onClick={()=>setShowPorductsModal(true)}>
         <img src={basket} alt='ecomerce-website' width={30} height={30}  />
         <span style={{position:'absolute',width:"24px",height:'24px',background:'#27C8A3',borderRadius:'50%',textAlign:'center',top:'-5px',color:'white'}}> {product.length}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;