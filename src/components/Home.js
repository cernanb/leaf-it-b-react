import PropTypes from "prop-types"
import React, { Component } from "react"
import { Carousel } from "react-responsive-carousel"
import ReactRevealText from "react-reveal-text"
import { Link as ScrollLink, Element } from "react-scroll"
import leaf from "../images/banana-leaf.jpg"
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react"
import FoodMenu from "./Menu"
import ContactForm from "./Form"
import logo from "../images/LeafItBlogo2.jpg"
import chilis from "../images/chilis.jpg"
import flower from "../images/flower.jpg"
import { LoremIpsum } from "lorem-ipsum"

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 3
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined"

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile, show }) => (
  <Container>
    <h1
      style={{
        fontSize: mobile ? "1.5em" : "3.1em",
        marginTop: mobile ? "0.5em" : "1.9em",
        fontWeight: "600",
        width: "70%"
      }}
    >
      <ReactRevealText show={show}>
        Dedicated to providing a cultural experience for the guilt free
        consumer, one leaf at a time.
      </ReactRevealText>
    </h1>
    <ScrollLink href="" to="about" spy={true} smooth={true} duration={2000}>
      <Button
        style={{ backgroundColor: "rgb(57,58,60)", color: "white" }}
        size="huge"
      >
        Learn More
      </Button>
    </ScrollLink>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = { activeItem: "home", show: false }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true })
    }, 1000)
  }
  render() {
    const { children } = this.props
    const { fixed, activeItem } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment style={{ minHeight: 700, padding: "1em 0em" }} vertical>
            <Container>
              <Menu secondary>
                <img src={logo} height={"150"} width={"150"} alt="logo" />
                <Menu.Menu position="right">
                  <Menu.Item
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                  />
                  <ScrollLink
                    href=""
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={2000}
                  >
                    <Menu.Item
                      name="about"
                      active={activeItem === "about"}
                      onClick={this.handleItemClick}
                    />
                  </ScrollLink>
                  <ScrollLink
                    href=""
                    to="menu"
                    spy={true}
                    smooth={true}
                    duration={2000}
                  >
                    <Menu.Item
                      name="menu"
                      active={activeItem === "menu"}
                      onClick={this.handleItemClick}
                    >
                      Menu
                    </Menu.Item>
                  </ScrollLink>
                  <ScrollLink
                    href=""
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={2000}
                  >
                    <Menu.Item>
                      <Button basic>Contact Us</Button>
                    </Menu.Item>
                  </ScrollLink>
                </Menu.Menu>
              </Menu>
            </Container>
            <HomepageHeading show={this.state.show} />
          </Segment>
          <div />
        </Visibility>
        <Container style={{ width: "80%" }}>
          <Carousel autoPlay={true} transitionTime={2000}>
            <div>
              <img src={chilis} />
            </div>
            <div>
              <img src={flower} />
            </div>
          </Carousel>
        </Container>
        <FoodMenu />
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Contact</Menu.Item>
          <Menu.Item as="a">About</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Divider horizontal>
      <Element name="about" />
      <Header as="h3" style={{ fontSize: "2em" }}>
        About Us
      </Header>
    </Divider>
    <Segment vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <p style={{ fontSize: "1.33em" }}>{lorem.generateParagraphs(1)}</p>

            <p style={{ fontSize: "1.33em" }}>{lorem.generateParagraphs(1)}</p>

            <p style={{ fontSize: "1.33em" }}>{lorem.generateParagraphs(1)}</p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered rounded size="large" src={leaf} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header inverted as="h4" content="Social" />
              <List link inverted>
                <List.Item
                  href="https://www.instagram.com/leaf.it.b/?hl=en"
                  as="a"
                  targel="_blank"
                >
                  Instagram
                </List.Item>
                <List.Item as="a">Facebook</List.Item>
                <List.Item as="a">Twitter</List.Item>
              </List>
            </Grid.Column>
            {/* <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column> */}
            <Grid.Column width={8}>
              <Header as="h4" inverted>
                Contact Us
              </Header>
              <ContactForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    <p
      style={{
        color: "white",
        textAlign: "center",
        backgroundColor: "#1b1c1d"
      }}
    >
      Leaf It B., ALL RIGHTS RESERVED
    </p>
  </ResponsiveContainer>
)
export default HomepageLayout
