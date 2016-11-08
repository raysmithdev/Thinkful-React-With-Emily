import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Navbar from './Navbar'

const About = (props) => (
  <div>
    <Navbar />
    <Jumbotron>
      <h1>Hello</h1>
      <p>This is the about page!</p>
    </Jumbotron>
  </div>
);

export default About
