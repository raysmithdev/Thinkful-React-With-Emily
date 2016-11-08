import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Navbar from './Navbar'

const Contact = (props) => (
  <div>
    <Navbar />
    <Jumbotron>
      <h1>Hello</h1>
      <p>This is the contact page!</p>
    </Jumbotron>
  </div>
);

export default Contact
