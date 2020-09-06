import React, { Component } from "react"
import { Form } from "semantic-ui-react"
import { Element } from "react-scroll"

class ContactForm extends Component {
  render() {
    return (
      <Form action="https://formspree.io/leafitb18@gmail.com" method="POST">
        <Element name="contact" />
        <Form.Group widths="equal">
          <Form.Input fluid placeholder="Name" name="name" />
          <Form.Input fluid placeholder="Email" name="_replyto" />
        </Form.Group>

        <Form.TextArea placeholder="Message" name="message" />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}
export default ContactForm
