import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  background: #fff;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.1fr;
  padding: 40px 8px;
  border-radius: 2px;
  width: 60%;
  max-height: 70%;
  margin: 5vh auto;
  position: relative;

  svg {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
`;

export const Image = styled.div`
  justify-self: center;
  grid-row: 1 / 3;

  div {
    text-align: center;
    width: 360px;
  }

  img {
    max-width: 100%;
  }
`;

export const Description = styled.div`
  display: grid;

  text {
    font-weight: bold;
    font-size: 15px;
    padding: 8px 0;
  }

  div {
    display: grid;
    grid-template-columns: 1;
    padding: 8px 0;
  }

  p {
    font-weight: bold;
    color: #d73a1e;
    font-size: 15px;
  }
`;

export const ActionButton = styled.div`
  grid-column: 2;

  button {
    margin-top: 15px;
    text-transform: uppercase;
    font-size: 14px;
    height: 35px;
    width: 120px;
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
`;
