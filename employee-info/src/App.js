import Navbar from './Components/navbar';
import Search from './Components/SearchForm/index';
import List from './Components/list';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [state, setState] = useState({
    search: '',
  });

  const handleInputChange = (event) => {
    setState({ search: event.target.value });
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={4}>
            <Search
              handleInputChange={handleInputChange}
              results={state.search}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={4}>
            <Button variant="primary">Sort by Name Alphabetically</Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <List search={state.search} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
