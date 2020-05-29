import React from 'react';

import { IoMdArrowDropdown } from 'react-icons/io';

import { Container, Menu, Logon } from './styles';

function MenuBar() {
  return (
    <Container>
      <Menu>
        <button type="button">
          Potions
          <IoMdArrowDropdown color="#fff" size={20} />
        </button>
        <button type="button">
          Ingredients
          <IoMdArrowDropdown color="#fff" size={20} />
        </button>
        <button type="button">
          Books
          <IoMdArrowDropdown color="#fff" size={20} />
        </button>
        <button type="button">
          Supplies
          <IoMdArrowDropdown color="#fff" size={20} />
        </button>
        <button type="button">
          Charms
          <IoMdArrowDropdown color="#fff" size={20} />
        </button>
        <li>Clearence!</li>
      </Menu>
      <Logon>
        <button type="button">Sign In</button>
        <span>or</span>
        <button type="button">Sign Up</button>
      </Logon>
    </Container>
  );
}

export default MenuBar;
