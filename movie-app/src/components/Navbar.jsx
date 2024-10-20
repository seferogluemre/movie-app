import { Container, Navbar } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Navbar.css";
function navbar() {
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            Movie App
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <FaRegUserCircle className="account-icon text-white" />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbar;
