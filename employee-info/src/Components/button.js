import React from 'react';
import { Button } from 'react-bootstrap';

function ButtonThing(props) {
  return (
    <Button variant="primary" onClick={props.handleSort}>
      Sort Alphabetically
    </Button>
  );
}

export default ButtonThing;
