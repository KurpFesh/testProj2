import React from 'react';
import './header.scss';
import { NavBar } from './NavBar/NavBar';
import { CloudImage } from './CloudImage/CloudImage';
import { Discount } from './Discount/Discount';
import { BeaconLogo } from '../BeaconLogo/BeaconLogo';
import { HeaderInfo } from './HeaderInfo';
import { MobileMenu } from './MobileMenu/MobileMenu';

export const Header = () => {
    return <div className="header">
        <MobileMenu />
        <div className="container">
            <NavBar />
            <div className='inline'>
                <div className="header__images">
                    <CloudImage />
                    <Discount id={1} amount={1} price={10} />
                    <Discount id={2} amount={100} percent={50} inverted />
                    <Discount id={3} amount={50} percent={25} inverted dark />
                    <BeaconLogo color='blue' shadow />
                </div>  
                <HeaderInfo />
            </div>
        </div>
    </div>
}