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
    font-style: italic;
    background: #523468;
    border: none;
    display: flex;
    color: #fff;
    font-size: 16px;
    padding: 15px 5px;
    margin-left: 10px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#523468')};
      border-radius: 6px;
    }
  }

  li {
    font-size: 16px;
    list-style: none;
    color: #fff;
    margin-left: 10px;
    padding: 15px;
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
  font-style: italic;
  align-items: center;

  button {
    background: #523468;
    border: none;
    font-style: italic;
    display: flex;
    color: #fff;
    padding: 8px;
    font-size: 16px;
  }

  span {
    font-size: 13px;
    color: #ab8fab;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
