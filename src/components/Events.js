import React, { Component } from "react"
import { Link, BrowserRouter as Router, Route } from "react-router-dom"
import { Container, Divider, Header } from "semantic-ui-react"
import { Element } from "react-scroll"
import nights from "../images/dec-nights.png"
import linda from "../images/linda.png"

class Events extends Component {
  render() {
    return (
      <>
        <Element name="events" />
        <Divider horizontal>
          <Header
            as="h3"
            style={{ fontSize: "2em", marginBottom: "50px", marginTop: "40px" }}
          >
            Upcoming Events
          </Header>
        </Divider>
        <Container
          style={{
            marginTop: "-20px",
            textAlign: "center"
          }}
        >
          <img src={linda} height={300} />
          <img src={nights} height={300} />
        </Container>
      </>
    )
  }
}
export default Events
