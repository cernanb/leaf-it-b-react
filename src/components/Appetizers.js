import React from 'react';
import MenuItemCard from './MenuItemCard';
import coming from '../images/coming.jpg';

const Appetizers = () => (
  <div style={{ textAlign: 'left' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <MenuItemCard
        title="Mini Rice or Noodle Bowl (5.50)"
        description="Enough for a child-sized portion or a snack"
        img={coming}
      />
      <MenuItemCard
        title="Banana Leaf Cone (starting at 10.50)"
        description="Full-sized meal/double the amount of a mini bowl serving."
        img={coming}
      />
    </div>
    <p style={{ textAlign: 'left', fontSize: '20px' }}>
      <strong>*Option to add meat or additional sides. </strong>
    </p>
    <p style={{ textAlign: 'left', fontSize: '20px' }}>
      <strong>*Banana Leaf Cone patent pending. </strong>
    </p>
  </div>
);

export default Appetizers;
