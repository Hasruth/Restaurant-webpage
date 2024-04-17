import React from 'react';
import { SubHeading } from '../../components'
import './Header.css';
import { images } from '../../constants'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home' >
    {/*this div is for information container*/ }
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: "2rem 0" }}>Sit tellus labortis sed senectus vivamus molestone.Condimentum volutpat marbi facilisis quam scelerisque sapin.Et,penatibus all quam amet tellus</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>


    {/*this div is for image container*/}
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
