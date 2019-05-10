import React, { Component } from "react"
import { Link, BrowserRouter as Router, Route } from "react-router-dom"
import { Container, Divider, Header } from "semantic-ui-react"
import { Element } from "react-scroll"
import nights from "../images/dec-nights.png"
import linda from "../images/linda.png"
import otay from "../images/otay.png"
import pifa from "../images/pifa.jpg"
import mabuhay from "../images/mabuhay.png"

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
              <div>
                <img src={otay} height={300} />
              </div>
              <div>
                <img src={mabuhay} height={300} />
              </div>
              <div>
                <img src={pifa} height={300} />
              </div>
              <div>
              <img src={nights} height={300} />
            </div>
            </Container>
           
        <Divider horizontal>
          <Header
            as="h3"
            style={{ fontSize: "2em", marginBottom: "50px", marginTop: "40px" }}
          >
            Past Events
          </Header>
        </Divider>
        <Container
          style={{
            marginTop: "-20px",
            textAlign: "center"
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <img src={linda} height={300} />
          </div>
        </Container>
      </>
    )
  }
}
export default Events
