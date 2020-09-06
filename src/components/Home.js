import PropTypes from "prop-types"
import React, { Component } from "react"
import { Carousel } from "react-responsive-carousel"
import ReactRevealText from "react-reveal-text"
import { Link as ScrollLink, Element } from "react-scroll"
import leaf from "../images/banana-leaf.jpg"
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"
import Gallery from "react-photo-gallery"
import Lightbox from "react-images"

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
import { LoremIpsum } from "lorem-ipsum"

const photos = [
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
]

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
  <Container style={{ marginTop: "60px" }}>
    <h1
      style={{
        fontSize: mobile ? "1.5em" : "3.1em",
        marginTop: mobile ? "0.5em" : "1.9em",
        fontWeight: "600",
        margin: mobile ? "0 auto" : "",
        marginBottom: mobile ? "30px" : "",
        width: "70%"
      }}
    >
      {mobile && (
        <>
          Dedicated to providing a cultural experience for the guilt free
          consumer, one leaf at a time.
        </>
      )}
      {!mobile && (
        <ReactRevealText show={show}>
          Dedicated to providing a cultural experience for the guilt free
          consumer, one leaf at a time.
        </ReactRevealText>
      )}
    </h1>
    <ScrollLink href="" to="about" spy={true} smooth={true} duration={2000}>
      <Button
        style={{ backgroundColor: "rgb(57,58,60)", color: "white" }}
        size={mobile ? "small" : "huge"}
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
  constructor() {
    super()
    this.state = { currentImage: 0, activeItem: "home", show: false }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }
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
          <Segment
            style={{ minHeight: 600, padding: "1em 0em", borderBottom: "none" }}
            vertical
          >
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
        <Divider horizontal style={{ marginBottom: "50px" }}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Images
          </Header>
        </Divider>
        <Container>
          <Gallery photos={photos} onClick={this.openLightbox} />
          <Lightbox
            images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
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
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
              <img src={logo} height={"150"} width={"150"} alt="logo" />
            </Container>
            <HomepageHeading mobile />
            <Divider horizontal>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Images
              </Header>
            </Divider>
            <Gallery photos={photos.slice(0, 2)} />
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
    <Element name="about" />
    <Divider horizontal>
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
