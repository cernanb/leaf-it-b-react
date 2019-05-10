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
import Events from "./Events"
import logo from "../images/LeafItBlogo2.jpg"
import chilis from "../images/chilis.jpg"
import flower from "../images/flower.jpg"
import pork from "../images/pork.jpg"
import leaves from "../images/leaves.jpg"
import noodles from "../images/noodles.jpg"
import skewer from "../images/skewer.jpg"
import jerome from "../images/jerome.jpg"
import skewer2 from "../images/skewer2.jpg"
import skewer3 from "../images/skewer3.jpg"
import skewer4 from "../images/skewer4.jpg"
import hands from "../images/hands.jpg"
import banner from "../images/banner.jpg"
import { LoremIpsum } from "lorem-ipsum"

const photos = [
  {
    src: pork,
    width: 4,
    height: 3
  },
  {
    src: leaves,
    width: 3,
    height: 4
  },
  {
    src: skewer,
    width: 3,
    height: 4
  },
  {
    src: jerome,
    width: 3,
    height: 4
  },
  {
    src: noodles,
    width: 4,
    height: 3
  },
  {
    src: skewer2,
    width: 3,
    height: 4
  },
  {
    src: skewer3,
    width: 3,
    height: 4
  },
  {
    src: hands,
    width: 3,
    height: 4
  },
  {
    src: skewer4,
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
                <img src={logo} height={"350"} width={"350"} alt="logo" />
                {/* <p>"Good food for good people"</p> */}
                <Menu.Menu position="right">
                  <Menu.Item
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                  />
                  <ScrollLink
                    href=""
                    to="events"
                    spy={true}
                    smooth={true}
                    duration={2000}
                  >
                    <Menu.Item
                      name="events"
                      active={activeItem === "events"}
                      onClick={this.handleItemClick}
                    />
                  </ScrollLink>
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
                    to="gallery"
                    spy={true}
                    smooth={true}
                    duration={2000}
                  >
                    <Menu.Item
                      name="gallery"
                      active={activeItem === "gallery"}
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
                    to="social"
                    spy={true}
                    smooth={true}
                    duration={2000}
                  >
                    <Menu.Item
                      name="social"
                      active={activeItem === "social"}
                      onClick={this.handleItemClick}
                    >
                      Social
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
        <Events />
        <FoodMenu />
        <Divider horizontal style={{ marginBottom: "50px" }} />
        <Container>
          <Element name="gallery" />
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
          <ScrollLink
            href=""
            to="events"
            spy={true}
            smooth={true}
            duration={2000}
          >
            <Menu.Item
              name="events"
              onClick={() => this.setState({ sidebarOpened: false })}
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
              onClick={() => this.setState({ sidebarOpened: false })}
            />
          </ScrollLink>
          <ScrollLink
            href=""
            to="about"
            spy={true}
            smooth={true}
            duration={2000}
          >
            <Menu.Item
              name="about"
              onClick={() => this.setState({ sidebarOpened: false })}
            />
          </ScrollLink>
          <ScrollLink
            href=""
            to="gallery"
            spy={true}
            smooth={true}
            duration={2000}
          >
            <Menu.Item
              name="gallery"
              onClick={() => this.setState({ sidebarOpened: false })}
            />
          </ScrollLink>
          <ScrollLink
            href=""
            to="social"
            spy={true}
            smooth={true}
            duration={2000}
          >
            <Menu.Item
              name="social"
              onClick={() => this.setState({ sidebarOpened: false })}
            />
          </ScrollLink>
          <ScrollLink
            href=""
            to="contact"
            spy={true}
            smooth={true}
            duration={2000}
          >
            <Menu.Item
              name="contact"
              onClick={() => this.setState({ sidebarOpened: false })}
            />
          </ScrollLink>
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
            <Events />
            <FoodMenu />
            <Element name="gallery" />
            <Gallery photos={photos.slice(0, 5)} />
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
            <p style={{ fontSize: "1.33em" }}>
              Our menu is inspired by my childhood memories of waking up to the
              aroma of fried garlic, onions, and tomatoes on a Saturday morning.
              From the kitchen window, I remember watching my father use a large
              machete to cut down long banana leaves in our backyard. After the
              leaves were cleaned and trimmed, he used these leaves to encase a
              serving of rice and meat. The essence of the banana leaf infused
              the rice, and it was ready to eat. As my mother, father, sisters,
              and I would sit around the table and unwrap our delicate packages,
              I remember the excitement of our Saturday tradition, and felt
              thankful for the opportunity to experience my culture at my
              fingertips through a traditional technique.
            </p>

            <p style={{ fontSize: "1.33em" }}>
              As I grew older, I understood that it wasn’t just about the yummy
              food I enjoyed, but it was also about the method of serving, the
              tradition of meals together, and the authenticity of my
              upbringing, and culture that I cherished.
            </p>
            <p style={{ fontSize: "1.33em" }}>
              This is what Leaf It B. is serving you. A traditionally prepared
              mix of Islander/Asian fusion food, wrapped in a eco-friendly, and
              fully compostable cone, for your modern enjoyment.
            </p>
            <p style={{ fontSize: "1.33em" }}>
              We also focus on tradition, authenticity, and community, which is
              why we use fully compostable materials to wrap, serve, and eat our
              food with. Each banana leaf cone that encompasses the food comes
              with a utensil made of birch wood. When done with your meal, these
              items can simply be disposed of in the compost bin. Our waste
              takes a mere 2-4 weeks to decompose in a commercial composting
              plant. Which is seconds compared to the years it takes for a
              plastic fork or spoon to decompose. Consumer responsibility, and
              sustainability are in the forefront of Leaf It B’s vision. We
              believe in the value of our world and the sustainability of our
              community and our customers, in addition to enjoying cultural
              diversity in our food. That’s why our mission is:
              <br />
              <br />
              <p style={{ textAlign: "center" }}>
                <strong>
                  DEDICATED TO PROVIDING A CULTURAL EXPERIENCE FOR THE
                  GUILT-FREE CONSUMER, ONE LEAF AT A TIME
                </strong>
              </p>
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered rounded size="large" src={banner} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Social" />
              <Element name="social" />
              <List link inverted>
                <List.Item
                  href="https://www.instagram.com/leaf.it.b/?hl=en"
                  as="a"
                  targel="_blank"
                >
                  Click to View Instagram
                </List.Item>
                <List.Item as="a">Click to View Facebook</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <p>Fully licensed for private and public  catering events.</p>
              <p>Registered for all Chula Vista Elementary School District or PTA events.</p>
              <p>
                Please <a href="tel:1-619-494-1263">call</a> for individual
                rates/special events.
              </p>
            </Grid.Column>
            <Grid.Column width={6}>
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
