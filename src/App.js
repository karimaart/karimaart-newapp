import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from './pg1.png'
import "./App.css";
function App() {
  return (
    <div>
      {/* <nav>
        <h1>WatchBox</h1>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav> */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="pg2" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      {/* <div className="pg0">
        <h2>The Pursuit Of Perfection</h2>
        <h4>
          in the modern era of independent watchmaking, every step forward is
          centuries in the making.
        </h4>
        <button>SHOP NOW</button>
      </div>
      <h1 className="head-s2">All Watches</h1>
      <p>
        With thousands of pre-owned luxury watches from the best brands around
        the world, we are dedicated to bringing collectors and enthusiasts an
        unrivaled selection of timepieces. Our in-house team of Swiss-trained
        watchmakers, technicians, and refinishers are highly skilled and have a
        passion for quality, authenticity, and craftsmanship—so you never have
        to worry about compromising value or provenance. Explore our expansive
        selection of authentic pre-owned watches from top brands like Rolex,
        Patek Philippe, Breitling, and Omega. Or, discover something new
        designed by an independent watchmaker—we have exactly what you've been
        searching for.
      </p>

      <div className="cards">
        <div className="c">
          <img src={require("./pg1.png")} alt="watch" />
          <h5>PATEK PHILIPPE</h5>
          <h6>Complications, 5231G-001</h6>
          <div class="price">$129,950</div>
        </div>
        <div className="c">
          <img src={require("./pg2.png")} alt="watch" />
          <h5>PATEK PHILIPPE</h5>
          <h6>Complications, 5130R-001</h6>
          <div class="price">$36,900</div>
        </div>
        <div className="c">
          <img src={require("./pg3.png")} alt="watch" />
          <h5>AUDEMARS PIGUET</h5>
          <h6>Royal oak, 26586IP.oo.1240IP.01</h6>
          <div class="price">$219,950</div>
        </div>
      </div>
      <div className="pg9">
        <h3>Why Choose Watchbox?</h3>
        <h4>
          As watch enthusiasts and experts ourselves, we are committed to the
          integrity and innovation of the luxury watch industry-which is why we
          invest in our processes, services, and team.
        </h4>
      </div> */}
    </div>
  );
}

export default App;
