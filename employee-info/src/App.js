import Navbar from './Components/navbar';
import Search from './Components/SearchForm/index';
import List from './Components/list';
import API from './utils/Api';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

const Employee = [];

API.searchEmployee().then((res) => {
  console.log(res);
  Employee.push(res.data.results);
  console.log(Employee);
});

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
