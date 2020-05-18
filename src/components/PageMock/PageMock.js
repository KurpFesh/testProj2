import React from 'react';
import { Link } from 'react-router-dom';

import './pageMock.scss';

export const PageMock = ({ url }) => {
    const title = url.replace(/\//g, '').replace(/^[a-z]|[A-Z]/g, function(v, i) {
        return i === 0 ? v.toUpperCase() : " " + v.toLowerCase();
    });
    return (
        <div className='pageMock'>
            <div className='pageMock__info'>
                <h1 className='pageMock__title'>{title}</h1>
                <h2 className='pageMock__message'>Page is now unavailable</h2>
                <h3 className='pageMock__proposition'>But you still can visit our main page:<Link to='/orderServices'>Order services</Link></h3>
            </div>
        </div>
    )
}