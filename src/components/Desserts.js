import React from "react"
import MenuItemCard from "./MenuItemCard"

const Beverages = () => (
  <div style={{ textAlign: "left" }}>
    <p style={{ textAlign: "left", fontSize: "20px" }}>yum!</p>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <MenuItemCard
        title={"PAN DE ICE CREAM SANDWHICH"}
        description={
          "Toasted and buttered traditional pan de sal with your choice of ube or pandan ice cream-drizzled with condensed milk and rolled in coconut sugar."
        }
      />
    </div>
  </div>
)

export default Beverages
