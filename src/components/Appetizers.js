import React from "react"
import MenuItemCard from "./MenuItemCard"

const Appetizers = () => (
  <div style={{ textAlign: "left" }}>
    <p style={{ textAlign: "left", fontSize: "20px" }}>
      COMPLEMENT YOUR ENTREE
    </p>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <MenuItemCard title={"SOFT BOILED EGG"} />
      <MenuItemCard title={"SKEWERS OF CUCUMBER/TOMATO"} />
      <MenuItemCard
        title={"SKEWER OF MULTI COLORED BABY BELL PEPPERS/ZUCCHINI"}
      />
      <MenuItemCard
        title={"EXTRA MEAT:  Beef or chicken (2)  Shrimp or Salmon (3)"}
      />
    </div>
  </div>
)

export default Appetizers
