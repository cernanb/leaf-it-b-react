import React from "react"
import MenuItemCard from "./MenuItemCard"

const PartyTrays = () => (
  <div style={{ textAlign: "left" }}>
    <p style={{ textAlign: "left", fontSize: "20px" }}>LET'S PARTY!</p>
    <em>
      25.00 DELIVERY CHARGE FOR 25 MILES OR LESS, AND 50.00 FOR 25-50 MILES.
    </em>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <MenuItemCard
        title={"BANANA STEEPED WHITE RICE"}
        description={" FULL- 50/HALF-20"}
      />
      <MenuItemCard
        title={"ADOBOED GARLIC RICE"}
        description={"FULL-70/HALF-40"}
      />
      <MenuItemCard title={"BEEF ENTREES"} description={"FULL-90/HALF-45"} />
      <MenuItemCard title={"CHICKEN OR PORK"} description={"FULL-85/HALF-40"} />
      <MenuItemCard
        title={"CUCUMBER/TOMATO SKEWERS"}
        description={"(SERVING OF 30)- 20"}
      />
      <MenuItemCard
        title={"BABY BELL PEPPER AND ZUCCHINI SKEWERS"}
        description={"(SERVING OF 30)- 25"}
      />
      <em>Custom Party trays ordered are customizable. Prices will vary.</em>
    </div>
  </div>
)

export default PartyTrays
