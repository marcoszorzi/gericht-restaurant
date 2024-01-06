import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
  </div>
);

export default Footer;

/**
 * Stopped at: 6:15:12
 * https://www.youtube.com/watch?v=F627pKNUCVQ&t=499s
 */