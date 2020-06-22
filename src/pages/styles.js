import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;

  header {
    padding: 60px 0 10px 60px;
    background-color: #fff;
    font-size: 22px;
    font-weight: bold;
  }
`;

export const GridList = styled.div`
  background: #fff;
  display: grid;
  grid-gap: 10px 8px;
  max-width: 1020px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: 850px) {
    justify-items: center;
  }
`;

export const Card = styled.div`
  display: grid;

  div {
    text-align: center;
    width: 200px;
    margin: 50px;

    &:hover {
      cursor: pointer;
    }
  }

  img {
    width: 100%;
  }

  text {
    color: #000;
    font-weight: bold;
  }

  span {
    color: #de5235;
  }
`;
