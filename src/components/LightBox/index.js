import React from 'react';

import { Container, Image, Description, ActionButton } from './styles';

import Bulgeye from '../../assets/images/products/bulgeye-potion.png';

function LightBox() {
  return (
    <Container>
      <Image>
        <div>
          <img src={Bulgeye} alt="" />
        </div>
      </Image>
      <Description>
        <text>Aging Potion</text>
        <text>Use/Effect:</text>
        <span>Causes the drinker to advance in age</span>
        <text>Ingredients:</text>
        <div>
          <span>Red Wine</span>
          <span>Prune Juice</span>
          <span>Hairy Fungus</span>
          <span>Tortoise Shell</span>
          <span>Caterpillar</span>
          <span>Bat Tongue</span>
        </div>
        <div>
          <text>Price:</text>
          <p>$29.99 </p>
        </div>
      </Description>
      <div>
        <button type="button" name="close-button" onClick="closeForm">
          &times;
        </button>
      </div>
      <ActionButton>
        <div>
          <button type="button" name="cart">
            Add do Cart
          </button>
        </div>
      </ActionButton>
    </Container>
  );
}

export default LightBox;
