import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import basket from '../../assests/images/basket.svg'
import { useSelector } from 'react-redux';


function Header({setShowPorductsModal}) {
  const product = useSelector((state) => state.product);

  const productNuber =  () =>{
    return product.reduce((acc,curr) => acc + curr.quantity,0)
  }
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{height:'90px',width:'99%',margin:'4px auto',borderRadius:'10px',
    backgroundColor: "#5b6467",
    backgroundImage: "linear-gradient(315deg, #5b6467 0%, #8b939a 74%)",
    fontFamily:'oswald,',
    
    
    }} >
      
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{fontSize:'18px'}}>
            <Nav.Link href="#features" className='px-4'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='px-4'>clothes</Nav.Link>
            <Nav.Link href="#pricing" className='px-4'>Toys</Nav.Link>
            <Nav.Link href="#pricing"className='px-4'>Feeding</Nav.Link>
            <Nav.Link href="#pricing" className='px-4'>SkinCare</Nav.Link>
       
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              About Us
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{position:'relative'}} onClick={()=>setShowPorductsModal(true)}>
         <img src={basket} alt='ecomerce-website' width={30} height={30}  />
         <span style={{position:'absolute',width:"24px",height:'24px',background:'#27C8A3',borderRadius:'50%',textAlign:'center',top:'-5px',color:'white'}}> {productNuber()}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;