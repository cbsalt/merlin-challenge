import React, { useState, useEffect, useCallback } from 'react';
import api from '../services/api';

import Header from '../components/Header/index';
import MenuBar from '../components/MenuBar/index';
import Footer from '../components/Footer/index';
import LightBox from '../components/LightBox/index';

import { Container, GridList, Card } from './styles';

function Home() {
  const [potionItem, setPotionItem] = useState({});
  const [potions, setPotions] = useState([]);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('potions');

      const { data } = response;

      setPotions(Object.values(data));
    }

    loadProducts();
  }, []);

  const openLightbox = useCallback(
    (id) => {
      setLightboxIsOpen(!lightboxIsOpen);
      const potionFind = potions.find((item) => item.id === id);

      setPotionItem(potionFind);
    },
    [lightboxIsOpen, potions]
  );

  const closeLightbox = useCallback(() => {
    setLightboxIsOpen(false);
  }, []);

  return (
    <Container>
      <Header />
      <MenuBar />
      {lightboxIsOpen && (
        <LightBox potion={potionItem} closeLightbox={closeLightbox} />
      )}
      <header>
        <text>Potions</text>
      </header>
      <GridList>
        {potions.map((potion) => (
          <Card key={potion.id} onClick={() => openLightbox(potion.id)}>
            <div>
              <img src={potion.image} alt={potion.name} />
              <text>{potion.name} - </text>
              <span>${potion.price}</span>
            </div>
          </Card>
        ))}
      </GridList>
      <Footer />
    </Container>
  );
}

export default Home;
