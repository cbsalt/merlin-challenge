import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;

  @media (max-width: 900px) {
    justify-content: space-around;
  }
`;
export const Logo = styled.div`
  text-align: center;

  div {
    display: flex;

    h1 {
      text-transform: uppercase;
      font-size: 26px;
      color: #d73a1e;
    }

    text {
      text-transform: uppercase;
      font-size: 26px;
      margin-left: 8px;
      color: #db4f26;
    }
  }

  span {
    font-style: italic;
    color: #5c4070;
    font-size: 15px;
  }
`;

export const SearchInput = styled.div`
  div {
    display: flex;
    align-items: center;
  }

  svg {
    position: absolute;
    margin-left: 10px;
  }

  input {
    height: 40px;
    width: 240px;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 0 40px;

    &::placeholder {
      color: #c2c7c3;
      font-size: 16px;
    }
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Shipping = styled.div`
  margin-left: 80px;
  text-align: center;
  font-style: italic;
  color: #db4f26;

  div text {
    font-size: 18px;
  }

  text {
    font-size: 12px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    margin-right: 30px;
  }

  text {
    color: #bab4b9;
    font-size: 20px;
  }

  span {
    color: #d73a1e;
    font-size: 20px;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
