import React from 'react';

import { FaFacebook, FaTumblrSquare, FaGooglePlus } from 'react-icons/fa';
import { AiFillTwitterCircle, AiOutlineCopyright } from 'react-icons/ai';
import { GrPinterest } from 'react-icons/gr';

import {
  Container,
  Institucional,
  SocialMedias,
  TradeMark,
  Newsletter,
} from './styles';

function Footer() {
  return (
    <Container>
      <Institucional>
        <>
          <text>Company</text>
          <text>Contact Us</text>
          <text>Shipping</text>
          <text>Returns</text>
          <text>Careers</text>
        </>
        <TradeMark>
          <div>
            <AiOutlineCopyright color="#846f74" size={12} />
            <text>2015 Merlin's Potions. All Rights Reserved</text>
          </div>
        </TradeMark>
        <SocialMedias>
          <FaFacebook color="#523269" size={28} />
          <AiFillTwitterCircle color="#523269" size={28} />
          <GrPinterest color="#523269" size={28} />
          <FaTumblrSquare color="#523269" size={34} />
          <FaGooglePlus color="#523269" size={28} />
        </SocialMedias>
      </Institucional>
      <Newsletter>
        <div>
          <text>Sign up for our Newsletter</text>
        </div>
        <div>
          <span>Sign up for our Newsletter &amp; get exclusive discounts!</span>
        </div>
        <div>
          <input type="input" name="email" placeholder="Enter your email" />
          <button type="button">Submit</button>
        </div>
      </Newsletter>
    </Container>
  );
}

export default Footer;
