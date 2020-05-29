import React, { useState, useEffect } from 'react';
import api from '../services/api';

import Header from '../components/Header/index';
import MenuBar from '../components/MenuBar/index';
import Footer from '../components/Footer/index';

import { Container, GridList, Card } from './styles';

function Home() {
  const [potions, setPotions] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('potions');

      const { data } = response;

      setPotions(Object.values(data));
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <Header />
      <MenuBar />
      <GridList>
        <header>
          <text>Potions</text>
        </header>
        <Card onClick="openHighLight">
          {potions.map((potion) => (
            <div key={potion.id}>
              <img src={potion.image} alt={potion.name} />
              <text>{potion.name} - </text>
              <span>$ {potion.price}</span>
            </div>
          ))}
        </Card>
      </GridList>
      <Footer />
    </Container>
  );
}

export default Home;
