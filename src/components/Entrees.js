import React from "react"
import MenuItemCard from "./MenuItemCard"

const Entrees = () => (
  <div style={{ textAlign: "left" }}>
    <p style={{ textAlign: "left", fontSize: "20px" }}>
      YOUR MAIN DISH SERVED IN A BANANA LEAF CONE
    </p>
    <p style={{ textAlign: "left", fontSize: "20px" }}>
      <strong>BANANA STEAMED WHITE RICE</strong>
    </p>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <MenuItemCard
        title={"ADOBOED RICE (+1)"}
        description={
          "Our traditional garlic rice, with a soy sauce and vinegar based reduction.  Served with a whole soft boiled egg and garnished with sliced green onions."
        }
      />
      <MenuItemCard
        title={"BEEF STEW (11)"}
        description={
          " A marriage of garlic, onions, and tomatoes stewed until they melt into the beef stew meat.  Carrots and potatoes included in the stew.  Accompanied by sweet, tri-colored baby bell peppers on a skewer.  Served with banana steamed rice."
        }
      />
      <MenuItemCard
        title={"BBQ CHICKEN (10) or BBQ BEEF (11)"}
        description={
          "Skinless/boneless chicken thighs or thinly sliced rib eye beef marinated in a mixture of a sweet, savory, and spicy sauce.  Garnished with red cabbage, green onion and sesame seeds.  Served with banana steamed rice."
        }
      />
      <MenuItemCard
        title={"PERFECTION PORK (10)"}
        description={
          "Baked, not fried pork butt covered in a sweet/salty sauce over white banana steeped rice.  Served with pickle cucumbers.  Served with banana steamed rice."
        }
      />

      <MenuItemCard
        title={"GARLIC NOODLES (VEGETABLE OPTION) (10)"}
        description={
          "Chewy noodles tossed with fried garlic, and accompanied with a sweet and savory sauce.  Garnished with green onions, tofu, julienne carrots, and boiled eggs."
        }
      />
      <MenuItemCard
        title={"PINEAPPLE SALMON WITH BANANA STEEPED RICE (12)"}
        description={
          "Pan seared, and then finished in a pineapple and lemon compote.  Served with skewered bell peppers and zucchini."
        }
      />
      <MenuItemCard
        title={"ISLAND COCONUT SHRIMP WITH BANANA LEAF STEEPED RICE (12)"}
        description={
          "Roasted shrimp and Calabaza squash accompanied by a creamy ginger, garlic, and coconut sauce."
        }
      />
    </div>
  </div>
)

export default Entrees
