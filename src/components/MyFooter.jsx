import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const MyFooter = () => (


    <>

        <footer>
            <Navbar bg="dark" variant="dark" fixed="bottom">
                <Container>
                    <Navbar.Brand href="#home">G.L.</Navbar.Brand>
                    <Nav className="justify-conten-sppace-around">
                        {/* sono ancora al inizio non ho ancora fatto la navigazione */}
                        <Nav.Link href="./MyNav.jsx">Home</Nav.Link>
                        <Nav.Link href="#">Conatct</Nav.Link>
                        <Nav.Link href="#">InfoMail</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </footer>

    </>



)

export default MyFooter