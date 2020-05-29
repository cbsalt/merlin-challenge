import React from 'react';

import { GiCauldron } from 'react-icons/gi';
import { MdSearch } from 'react-icons/md';

import { Container, Logo, SearchInput, Shipping, Cart } from './styles';

function Header() {
  return (
    <Container>
      <Logo>
        <div>
          <h1>Merlin's</h1>
          <text>Potions</text>
        </div>
        <span>— fine potions since 1026 —</span>
      </Logo>
      <SearchInput>
        <div>
          <MdSearch color="#d73a1e" size={25} />
          <input type="text" placeholder="Search our stock" />
        </div>
      </SearchInput>
      <Shipping>
        <div>
          <text>Free shipping</text>
        </div>
        <text>on orders over $50</text>
      </Shipping>
      <Cart>
        <div>
          <GiCauldron color="#523468" size={40} />
        </div>
        <div>
          <text>BAG: </text>
          <span>1</span>
        </div>
      </Cart>
    </Container>
  );
}

export default Header;
