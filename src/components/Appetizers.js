import React from "react"
import MenuItemCard from "./MenuItemCard"

const Appetizers = () => (
  <div style={{ textAlign: "left" }}>
    <p style={{ textAlign: "left", fontSize: "20px" }}>excellent for sharing</p>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
    </div>
  </div>
)

export default Appetizers
