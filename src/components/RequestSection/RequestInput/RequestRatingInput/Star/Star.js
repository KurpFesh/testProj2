import React from 'react';

import './star.scss'

export const Star = ({ id, rating, preRated, rateSite, onHover, onClick }) => {
    const disabled = rating===5;
    const containerClasses=`star ${disabled?' disabled':''}`;
    const starClasses = `fa${(id<=rating||id<=preRated)?' fa-star':' fa-star-o'}`;
    return (
        <div className={containerClasses}>
            <i className={starClasses} 
                onMouseEnter={onHover} 
                onClick={disabled ? ()=>{} : () => {onClick(id)}} 
            />
        </div>
    )
}