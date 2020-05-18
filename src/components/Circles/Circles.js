import React from 'react';
import './circles.scss';

import { applyItemClasses } from '../../auxiliary/renderItems';

export const Circles = ({ styles, color }) => {
    const containerClasses = `circles ${color}`;
    
    return (
        <div className={containerClasses} style={styles}>
            {
                applyItemClasses([1,2,3,4], 'circle')
            }
        </div>
    )
}