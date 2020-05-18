import React from 'react';
import { ProductCounter } from './ProductCounter/ProductCounter';

import './productItem.scss';

export const ProductItem = ({ id, title, price, description, amount, image }) => {
    return (
        <div className='productItem'>
            <h3 className='productItem__title'>{title}</h3>
            <div className='productItem__image'>
                <img src={image} alt={`product#${id} ${title}`} />
            </div>
            <span className='productItem__price'>${price}</span>
            <p className='productItem__description'>{description}</p>
            <div className='productItem__buy'>
                <ProductCounter productId={id} amount={amount} />
                <a href='#requestSection'><button className='makeOrder'>Buy now</button></a>
            </div>
        </div>
    )
}