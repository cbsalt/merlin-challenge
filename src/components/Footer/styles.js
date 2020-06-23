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
    justify-content: center;
  }
`;

export const Institucional = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 0.5fr 1fr 1fr;
  margin-top: 10px;
  align-items: center;

  > text {
    color: #d73d43;
    text-transform: uppercase;
    font-size: 20px;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }

  @media (max-width: 800px) {
    justify-items: center;
  }
`;

export const SocialMedias = styled.div`
  grid-column: 1 / 4;
  align-items: center;

  svg {
    margin-right: 42px;

    @media (max-width: 800px) {
      margin: 16px;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const TradeMark = styled.div`
  grid-column: 1 / 4;
  justify-content: center;

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
    font-size: 18px;
    font-family: serif;
  }

  span {
    font-size: 16px;
  }

  div {
    input {
      width: 270px;
      height: 35px;
      border-radius: 4px;
      border: 1px solid #000;
      padding: 0 12px;

      ::placeholder {
        font-size: 14px;
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
      display: flex;
    }
  }

  @media (max-width: 800px) {
    margin: auto;
    grid-row: 1;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;
