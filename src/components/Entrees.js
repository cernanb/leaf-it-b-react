import React from 'react';
import MenuItemCard from './MenuItemCard';
import adobo from '../images/adoborice.JPG';
import noodles2 from '../images/noodles2.JPG';
import perfpork from '../images/perfpork.JPG';
import chicken from '../images/chicken.jpg';
import coming from '../images/coming.jpg';

const Entrees = () => (
  <div style={{ textAlign: 'left' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <MenuItemCard
        title="BANANA STEAMED WHITE RICE"
        description="Steamed short grain white rice"
        img={coming}
      />
      <MenuItemCard
        title="ADOBOED CHICKEN FRIED RICE"
        description="Our traditional garlic rice, with a soy sauce and vinegar based reduction.  Served with a whole soft boiled egg and garnished with sliced green onions."
        img={adobo}
      />
      <MenuItemCard
        title="BEEF TRIFECTA "
        description=" A marriage of garlic, onions, and tomatoes stewed until they melt into the beef stew meat.  Carrots and potatoes included in the stew.  Accompanied by sweet, tri-colored baby bell peppers on a skewer.  Served with banana steamed rice."
        img={coming}
      />

      <MenuItemCard
        title="PERFECTION PORK "
        description="Twice cooked pork butt covered in a traditional sweet & salty sauce over white banana steeped rice. Served with banana steamed rice and a side of sweet & sour cucumbers."
        img={perfpork}
      />

      <MenuItemCard
        title="ISLAND CHARRED CHICKEN"
        description="Skinless/boneless chicken thighs marinated in a mixture of a sweet, savory, and spicy sauce. Served with banana steamed rice and a side of sweet & sour cucumbers."
        img={chicken}
      />

      <MenuItemCard
        title="GARLIC NOODLES (VEGETABLE OPTION) "
        description="Chewy noodles tossed with fried garlic, and accompanied with a sweet and savory sauce.  Garnished with green onions, red cabbage, and julienne carrots."
        img={noodles2}
      />
      <MenuItemCard
        title="PINEAPPLE SALMON WITH BANANA STEEPED RICE "
        description="Pan seared, and then finished in a pineapple and lemon compote.  Served with skewered bell peppers and zucchini."
        img={coming}
      />
      <MenuItemCard
        title="ISLAND COCONUT SHRIMP WITH BANANA LEAF STEEPED RICE"
        description="Roasted shrimp and Calabaza squash accompanied by a creamy ginger, garlic, and coconut sauce."
        img={coming}
      />

      <MenuItemCard
        title="PAN DE ICE CREAM SANDWHICH"
        description="Toasted and buttered traditional pan de sal with your choice of ube or pandan ice cream-drizzled with condensed milk and rolled in coconut sugar."
        img={coming}
      />
    </div>
  </div>
);

export default Entrees;
