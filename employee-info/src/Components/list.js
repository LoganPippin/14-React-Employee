import { Table } from 'react-bootstrap';
import Body from './tBody';
import API from '../utils/Api';
import { useState, useEffect } from 'react';

function Tables(props) {
  const [empState, setEmployeeState] = useState({
    data: [],
  });

  console.log(props.search);

  useEffect(() => {
    API.searchEmployee()
      .then((res) => {
        console.log(res);

        if (props.search) {
          const regex = new RegExp(props.search, 'gi');
          setEmployeeState({
            data: res.data.results.filter((emp) => emp.name.first.match(regex)),
          });
        } else {
          setEmployeeState({
            data: res.data.results,
          });
        }
      })
      .catch((err) => console.log(err));
  }, [props.search]);

  return (
    <div className="mt-5">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>age</th>
            <th>Cell Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {empState.data.map((emp) => (
            <Body
              key={emp.phone}
              img={emp.picture.thumbnail}
              name={emp.name.first}
              last={emp.name.last}
              email={emp.email}
              age={emp.dob.age}
              cell={emp.cell}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tables;
