import React from 'react';

import './Chef.css';
import { images } from '../../constants'
import { SubHeading } from '../../components';
const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='Chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word" />
      <h1 className='headtext__cormorant'>What we Believe In</h1>


      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio facilisis mauris sit amet massa vitae tortor condimentum. Sit amet est placerat in egestas erat imperdiet.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign'/>
      </div>
    </div>

  </div>
);

export default Chef;
