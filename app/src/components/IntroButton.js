import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

const IntroButton = (props) => (
    <p>
      <Link to={`/user/${props.name}/${props.bio}`}>
        <Button
          bsStyle={props.buttonColor}
        >
          Learn more
        </Button>
      </Link>
    </p>
);

export default IntroButton
