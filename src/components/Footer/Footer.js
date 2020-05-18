import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

import { SocialLogo } from './SocialLogo/SocialLogo';

import handImg from './hand.png';
import { Circles } from '../Circles/Circles';

export const Footer = () => {
    return (
        <div className='footer'>
            <img className='footer__image' src={handImg} />
            <Circles color='green' styles={{top: '0', left:'20rem'}} />
            <div className='container'>
                <h2 className='footer__phone'>Support:(844) 295-0900</h2>
                <h3 className='footer__mail'>support@frontdeskhelpers.com</h3>
                <div className='footer__socials'>
                    <SocialLogo social='facebook' />
                    <SocialLogo social='google-plus' />
                    <SocialLogo social='youtube' />
                    <SocialLogo social='linkedin' />
                </div>
                <div className='footer__links'>
                    <Link to='/privacyPolicy'>Privacy Policy</Link>
                    <Link to='termsOfService'>Terms of Service</Link>
                    <Link to='/termsOfSales'>Terms of Sales</Link>
                </div>
                <div className='footer__rights'>&#xA9; 2017 FDH Cloud</div>
            </div>
        </div>
    )
}