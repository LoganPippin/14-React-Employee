import Navbar from './Components/navbar';
import Search from './Components/SearchForm/index';
import List from './Components/list';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={4}>
            <Search />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={8}>
            <List />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
