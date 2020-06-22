import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #523468;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0 60px 0 50px;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  button {
    font-family: serif;
    font-style: italic;
    font-size: 18px;
    background: #523468;
    border: none;
    display: flex;
    color: #fff;
    padding: 15px 5px;
    margin-left: 10px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#523468')};
      border-radius: 6px;
    }
  }

  li {
    font-family: serif;
    font-style: italic;
    font-size: 18px;
    list-style: none;
    color: #fff;
    margin-left: 10px;
    padding: 18px;
    text-align: center;
    background: #422a53;
    border-radius: 6px;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Logon = styled.div`
  display: flex;
  align-items: center;

  button {
    background: #523468;
    border: none;
    font-family: serif;
    font-style: italic;
    font-size: 18px;
    display: flex;
    color: #fff;
    padding: 8px;
  }

  span {
    font-family: serif;
    font-style: italic;
    font-size: 16px;
    color: #ab8fab;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
