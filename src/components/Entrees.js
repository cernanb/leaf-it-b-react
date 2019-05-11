import React from 'react';
import MenuItemCard from './MenuItemCard';

const Entrees = () => (
  <div style={{ textAlign: 'left' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <MenuItemCard
        title="BANANA STEAMED WHITE RICE"
        description="Steamed short grain white rice"
      />
      <MenuItemCard
        title="ADOBOED CHICKEN FRIED RICE"
        description="Our traditional garlic rice, with a soy sauce and vinegar based reduction.  Served with a whole soft boiled egg and garnished with sliced green onions."
      />
      <MenuItemCard
        title="BEEF STEW "
        description=" A marriage of garlic, onions, and tomatoes stewed until they melt into the beef stew meat.  Carrots and potatoes included in the stew.  Accompanied by sweet, tri-colored baby bell peppers on a skewer.  Served with banana steamed rice."
      />

      <MenuItemCard
        title="PERFECTION PORK "
        description="Twice cooked pork butt covered in a traditional sweet & salty sauce over white banana steeped rice. Served with banana steamed rice and a side of sweet & sour cucumbers."
      />

      <MenuItemCard
        title="GARLIC NOODLES (VEGETABLE OPTION) "
        description="Chewy noodles tossed with fried garlic, and accompanied with a sweet and savory sauce.  Garnished with green onions, red cabbage, and julienne carrots."
      />
      <MenuItemCard
        title="PINEAPPLE SALMON WITH BANANA STEEPED RICE "
        description="Pan seared, and then finished in a pineapple and lemon compote.  Served with skewered bell peppers and zucchini."
      />
      <MenuItemCard
        title="ISLAND COCONUT SHRIMP WITH BANANA LEAF STEEPED RICE"
        description="Roasted shrimp and Calabaza squash accompanied by a creamy ginger, garlic, and coconut sauce."
      />

      <MenuItemCard
        title="PAN DE ICE CREAM SANDWHICH"
        description="Toasted and buttered traditional pan de sal with your choice of ube or pandan ice cream-drizzled with condensed milk and rolled in coconut sugar."
      />
    </div>
  </div>
);

export default Entrees;
