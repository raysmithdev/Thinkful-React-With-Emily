import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import IntroButton from './IntroButton'

const Intro = (props) => (
  <Jumbotron>
    <h1>Hello, {props.name}!</h1>
    <p>{props.bio}</p>
    <IntroButton
      buttonColor={props.buttonColor}
      name={props.name}
      bio={props.bio}
    />
  </Jumbotron>
);

export default Intro;
