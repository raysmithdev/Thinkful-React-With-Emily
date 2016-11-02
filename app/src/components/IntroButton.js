import React from 'react';
import { Button } from 'react-bootstrap';

const IntroButton = (props) => (
    <p>
      <Button
        bsStyle={props.buttonColor}
      >
        Learn more
      </Button>
    </p>
);

export default IntroButton;
