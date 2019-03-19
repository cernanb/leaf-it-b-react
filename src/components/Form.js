import React, { Component } from "react"
import { Form } from "semantic-ui-react"
import { Element } from "react-scroll"

class ContactForm extends Component {
  render() {
    return (
      <Form>
        <Element name="contact" />
        <Form.Group widths="equal">
          <Form.Input fluid placeholder="Name" />
          <Form.Input fluid placeholder="Email" />
        </Form.Group>

        <Form.TextArea placeholder="Message" />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}
export default ContactForm
