import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import adobo from '../images/adoborice.JPG';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const MenuItemCard = ({ title, description }) => (
  <div
    style={{
      width: '550px',
      paddingTop: '20px',
      paddingBottom: '20px',
      display: 'flex',
    }}
  >
    <div style={{ marginLeft: '30px', width: '50%' }}>
      <div style={{ width: '60%', fontSize: '20px' }}>
        <strong>{title}</strong>
      </div>
      <div style={{ width: '50%' }}>{description}</div>
    </div>
    {/* <div style={{ width: '50%' }}>
      <img src={adobo} height={300} />
    </div> */}
  </div>
);

export default MenuItemCard;
