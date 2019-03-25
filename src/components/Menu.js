import React, { Component } from "react"
import { Link, BrowserRouter as Router, Route } from "react-router-dom"
import { Container, Divider, Header } from "semantic-ui-react"
import { Element } from "react-scroll"
import Sides from "./Appetizers"
// import SoupsSalads from "./SoupsSalads"
import Entrees from "./Entrees"
// import Desserts from "./Desserts"
import Beverages from "./Beverages"
import Desserts from "./Desserts"
import PartyTrays from "./PartyTrays"

class Menu extends Component {
  state = {
    activeTab: "entrees"
  }
  render() {
    return (
      <>
        <Divider horizontal>
          <Header
            as="h3"
            style={{ fontSize: "2em", marginBottom: "50px", marginTop: "40px" }}
          >
            Menu Offerings Served
          </Header>
        </Divider>
        <Container
          style={{
            marginTop: "-20px"
          }}
        >
          <em>
            All choices of proteins can be mixed and matched with white, or
            garlic rice. All dishes come with a side of egg, roasted veggies,
            simple slaw, or pickled cucumbers. Prices may vary.
          </em>
          <Element name="menu" />
          <Router>
            <div style={{ textAlign: "center" }}>
              <ul className="menu-nav">
                <li
                  onClick={() => this.setState({ activeTab: "entrees" })}
                  style={
                    this.state.activeTab === "entrees"
                      ? { borderBottom: "2px solid black", fontWeight: "700" }
                      : {}
                  }
                >
                  <Link to="/entrees">ENTREES</Link>
                </li>
                <li
                  onClick={() => this.setState({ activeTab: "starters" })}
                  style={
                    this.state.activeTab === "starters"
                      ? { borderBottom: "2px solid black", fontWeight: "700" }
                      : {}
                  }
                >
                  <Link to="/">SIDES (1)</Link>
                </li>

                <li
                  onClick={() => this.setState({ activeTab: "desserts" })}
                  style={
                    this.state.activeTab === "desserts"
                      ? { borderBottom: "2px solid black", fontWeight: "700" }
                      : {}
                  }
                >
                  <Link to="/desserts">DESSERTS</Link>
                </li>
                <li
                  onClick={() => this.setState({ activeTab: "trays" })}
                  style={
                    this.state.activeTab === "trays"
                      ? { borderBottom: "2px solid black", fontWeight: "700" }
                      : {}
                  }
                >
                  <Link to="/trays">PARTY TRAY SIZES</Link>
                </li>
              </ul>
              <Route exact path="/" component={Sides} />
              {/* <Route path="/soups-salads" component={SoupsSalads} /> */}
              <Route path="/entrees" component={Entrees} />
              {/* <Route path="/desserts" component={Desserts} /> */}
              <Route path="/beverages" component={Beverages} />
              <Route path="/desserts" component={Desserts} />
              <Route path="/trays" component={PartyTrays} />
            </div>
          </Router>
        </Container>
      </>
    )
  }
}
export default Menu
