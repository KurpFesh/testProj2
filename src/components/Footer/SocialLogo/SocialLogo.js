import React from 'react';
import './socialLogo.scss';

export const SocialLogo = ({ social }) => {
    return (
        <div className='socialLogo'>
            <i className={`fa fa-${social}`}></i>
        </div>
    )
}