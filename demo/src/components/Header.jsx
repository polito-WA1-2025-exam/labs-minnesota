import { Container, Navbar } from "react-bootstrap";

function Header(props){
    return <Navbar bg="primary">
        <Container fluid><h1 style= {{color: "white"}}>Guess Who? </h1><h2 style={{color: "red"}}> Footballers edition </h2></Container>
        </Navbar>
}

export default Header;