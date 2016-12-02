import React from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

const AddItemView = ({ addItem }) => {
  return (
    <Form
      onSubmit={ (event) => {
        event.preventDefault()
        let userInput = event.target.input.value
        addItem(userInput)
      }}
      inline
    >
    <FormGroup controlId="formInlineName">
      <FormControl name="input" type="text" placeholder="Add an item..."  />
    </FormGroup>
    {' '}
    <Button type="submit">
      Add
    </Button>
  </Form>
  )
}

export default AddItemView
