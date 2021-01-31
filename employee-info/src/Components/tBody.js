import React from 'react';

function body(props) {
  return (
    <tr>
      <td>
        <img src={props.img} alt="person"></img>
      </td>
      <td>{props.name}</td>
      <td>{props.last}</td>
      <td>{props.email}</td>
      <td>{props.age}</td>
      <td>{props.cell}</td>
    </tr>
  );
}

export default body;
