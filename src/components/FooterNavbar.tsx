import { Container, Navbar } from "react-bootstrap";

function FooterNavbar () {
    return(
    <Navbar bg="dark" data-bs-theme="dark" fixed="bottom">
        <Container>
        <Navbar.Brand>
        <p>Test</p>
        </Navbar.Brand>
        </Container>
    </Navbar>
    );
}

export default FooterNavbar;