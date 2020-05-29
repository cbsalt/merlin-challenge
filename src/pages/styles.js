import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`;

export const GridList = styled.div`
  background: #fff;
  display: grid;
  grid-gap: 10px 8px;
  max-width: 1020px;
  margin: 0 auto;

  header {
    grid-column-start: 1;
    font-size: 22px;
    font-weight: bold;
    margin-left: 60px;
    margin-top: 50px;
  }

  @media (max-width: 850px) {
    justify-items: center;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

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
