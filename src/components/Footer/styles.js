import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #e6e6e6;
  height: 280px;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 0 auto;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Institucional = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 0.5fr 1fr 1fr;
  margin-top: 10px;

  > text {
    color: #d73d43;
    text-transform: uppercase;
    font-size: 20px;
    align-items: center;

    @media (max-width: 800px) {
      display: none;
    }
  }

  @media (max-width: 800px) {
    display: block;
    justify-self: center;
    margin-left: auto;
  }
`;

export const SocialMedias = styled.div`
  grid-row: 3;
  grid-column: 1 / 4;
  display: flex;
  align-items: center;

  svg {
    margin-right: 45px;
  }
`;

export const TradeMark = styled.div`
  grid-column: 1 / 4;
  display: flex;

  div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }

    text {
      color: #846f74;
      font-size: 15px;
    }
  }
`;

export const Newsletter = styled.div`
  background: #fff;
  height: 180px;
  margin-left: 40px;
  border-radius: 6px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  padding: 20px;

  text {
    font-style: italic;
    font-size: 15px;
  }

  span {
    font-size: 15px;
  }

  input {
    width: 250px;
    height: 35px;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 0 12px;

    ::placeholder {
      font-size: 13px;
      color: #b4b4b4;
    }
  }

  button {
    margin-left: 8px;
    text-transform: uppercase;
    height: 35px;
    width: 100px;
    border: none;
    border-radius: 4px;
    color: #fff;
    background: #d73a1e;
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.08, '#d73a1e')};
      border-radius: 6px;
    }
  }

  @media (max-width: 800px) {
    margin-left: 0;
    grid-row: 1;
  }
`;
