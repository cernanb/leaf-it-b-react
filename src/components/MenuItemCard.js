import React from "react"
import { LoremIpsum } from "lorem-ipsum"

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

const MenuItemCard = () => (
  <div
    style={{
      width: "550px",
      paddingTop: "20px",
      paddingBottom: "20px",
      display: "flex"
    }}
  >
    <div style={{ marginLeft: "30px" }}>
      <div style={{ width: "50%", fontSize: "20px" }}>
        <strong>{lorem.generateWords(4)}</strong>
      </div>
      <div style={{ width: "50%" }}>{lorem.generateWords(5)}</div>
    </div>
  </div>
)

export default MenuItemCard
