import React from 'react';
import './cloudImage.scss';

import cloud from './cloud.png';
import { applyItemClasses } from '../../../auxiliary/renderItems';

export const CloudImage = () => {
    return <div className="cloudImage">
        <img className='cloudImage__border' src={cloud} />
        {
            applyItemClasses([1,2,3,4,5,6,7,8,9,10,11,12], 'cloudItem')
        }
    </div>
}