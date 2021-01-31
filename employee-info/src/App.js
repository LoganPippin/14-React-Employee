import Navbar from './Components/navbar';
import Search from './Components/SearchForm/index';
import List from './Components/list';
import Button from './Components/button';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  const [state, setState] = useState({
    search: '',
    sort: false,
  });

  const handleInputChange = (event) => {
    setState({ ...state, search: event.target.value });
  };

  const handleSort = (event) => {
    if (!state.sort) {
      setState({ ...state, sort: true });
    } else {
      setState({ ...state, sort: false });
    }
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
          <Col>
            <Button handleSort={handleSort} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <List search={state.search} sort={state.sort} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
