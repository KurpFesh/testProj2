import React from 'react';
import './discount.scss';

export const Discount = ({ id, amount, percent, price, inverted, front, dark }) => {
    const classes = 
        `discount discount--${id} ${inverted?' inverted':''}${front?' front':''}${dark?' dark':''}`;

    const beaconAmount = `${amount} Beacon${amount>1?'s':''}`;
    return (
        <div className={classes}>
            <div className='discount__amount'>{beaconAmount}</div>
            { percent && <div className='discount__percent'>- {percent}% off</div>}
            { price && <div className='discount__price'>{price} $</div> }
        </div>
    )
}