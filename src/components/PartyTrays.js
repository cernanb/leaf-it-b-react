import React from 'react';
import MenuItemCard from './MenuItemCard';
import cucumbers from '../images/cucumber.JPG';
import coming from '../images/coming.jpg';

const PartyTrays = () => (
  <div style={{ textAlign: 'left' }}>
    <p style={{ textAlign: 'left', fontSize: '20px', fontWeight: 'bold' }}>
      LET'S PARTY!
    </p>
    <em style={{ fontWeight: 'bold' }}>
      25.00 DELIVERY CHARGE FOR 25 MILES OR LESS, AND 50.00 FOR 25-50 MILES.
      <br />
      FULL SIZE 2" PAN SERVES 20-30 PEOPLE
      <br />
      FULL SIZE 4" PAN SERVES UP TO 50 PEOPLE
      <br />
      HALF TRAY PAN SERVES UP TO 15 PEOPLE
    </em>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <MenuItemCard
        title="BANANA STEEPED WHITE RICE"
        description={`Half-15 | 2"-45`}
        img={coming}
      />
      <MenuItemCard
        title="ADOBOED CHICKEN FRIED RICE"
        description={`Half-30 | 2"-55| 4"-75`}
        img={coming}
      />
      <MenuItemCard
        title="BEEF ENTREES"
        description={`Half-45 | 2"-110`}
        img={coming}
      />

      <MenuItemCard
        title="CHICKEN OR PORK ENTREES"
        description={`Half-35 | 2"-90`}
        img={coming}
      />

      <MenuItemCard
        title="GARLIC NOODLES (VEGETABLE OPTION)"
        description={`Half-25 | 2"-50`}
        img={coming}
      />

      <MenuItemCard
        title="SWEET & SOUR CUCUMBER SKEWERS"
        description="Half-20"
        img={cucumbers}
      />

      <MenuItemCard
        title="BABY BELL PEPPER SKEWERS"
        description="Half-20"
        img={coming}
      />
    </div>
    <em style={{ fontWeight: 'bold' }}>
      {' '}
      Party trays are customizable. Prices will vary. Please contact us for more
      details.
      <br />
      Bring the festival vibe to your party! We can set up a booth and serve
      your guests our original Banana Leaf Cones
      <br />
      2 hour minimum for 50 cones - $100.
      <br />4 hour maximum for 100 cones - $200.
    </em>
  </div>
);

export default PartyTrays;
