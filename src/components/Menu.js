import React from "react"
import { Link, BrowserRouter as Router, Route } from "react-router-dom"
import { Container, Divider, Header } from "semantic-ui-react"
import { Element } from "react-scroll"
import Appetizers from "./Appetizers"
// import SoupsSalads from "./SoupsSalads"
import Entrees from "./Entrees"
// import Desserts from "./Desserts"
import Beverages from "./Beverages"

const Menu = () => (
  <>
    <Divider horizontal>
      <Header
        as="h3"
        style={{ fontSize: "2em", marginBottom: "50px", marginTop: "50px" }}
      >
        Menu
      </Header>
      {/* <h1 style={{ marginBottom: "20px" }}>Menu</h1> */}
    </Divider>
    <Container>
      <Element name="menu" />
      <Router>
        <div style={{ textAlign: "center" }}>
          <ul className="menu-nav">
            <li>
              <Link to="/">STARTERS</Link>
            </li>

            <li>
              <Link to="/entrees">ENTREES</Link>
            </li>

            <li>
              <Link to="/beverages">BEVERAGES</Link>
            </li>
          </ul>
          <Route exact path="/" component={Appetizers} />
          {/* <Route path="/soups-salads" component={SoupsSalads} /> */}
          <Route path="/entrees" component={Entrees} />
          {/* <Route path="/desserts" component={Desserts} /> */}
          <Route path="/beverages" component={Beverages} />
        </div>
      </Router>
    </Container>
  </>
)
export default Menu
