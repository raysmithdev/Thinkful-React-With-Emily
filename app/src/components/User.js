import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Navbar from './Navbar'

const User = (props) => (
  <div>
    <Navbar />
    <Jumbotron>
      <h1>Hello, {props.params.name}</h1>
      <p>{props.params.about}</p>
    </Jumbotron>
  </div>
);

export default User
