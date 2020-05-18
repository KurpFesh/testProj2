import React from 'react';
import './beaconLogo.scss';

import { beaconLogos } from './beaconLogos';

import { Circles } from '../Circles/Circles';

export const BeaconLogo = ({ color, shadow, reflected }) => {
    const classes = `beaconLogo${reflected?' reflected':''}`
    return <div className={classes}>
        <Circles color={color} styles={{top: '5rem', left:'6rem'}} />
        <img src={beaconLogos[color]} alt="" />
        { shadow && <div className="beaconLogo__shadow"></div> }
    </div>
}