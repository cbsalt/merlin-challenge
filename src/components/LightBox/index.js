import React from 'react';
import { MdClose } from 'react-icons/md';

import { Wrapper, Container, Image, Description, ActionButton } from './styles';

function LightBox({ potion, closeLightbox }) {
  return (
    <Wrapper>
      <Container>
        <Image>
          <div>
            <img src={potion.image} alt={potion.name} />
          </div>
        </Image>
        <Description>
          <text>{potion.name}</text>
          <text>Use/Effect:</text>
          <span>{potion.effect}</span>
          <text>Ingredients:</text>
          <div>
            <span>{potion.ingredients[0]}</span>
            <span>{potion.ingredients[1]}</span>
            <span>{potion.ingredients[2]}</span>
            <span>{potion.ingredients[3]}</span>
            <span>{potion.ingredients[4]}</span>
          </div>
          <div>
            <text>Price:</text>
            <p>{potion.price} </p>
          </div>
        </Description>
        <div>
          <MdClose size={20} onClick={closeLightbox} />
        </div>
        <ActionButton>
          <div>
            <button type="button" name="cart">
              Add do Cart
            </button>
          </div>
        </ActionButton>
      </Container>
    </Wrapper>
  );
}

export default LightBox;
