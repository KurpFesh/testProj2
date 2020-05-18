import React, { useState } from 'react';
import { Star } from './Star/Star';

import './requestRatingInput.scss';
import { RATING_FIELD } from '../../constants/fieldIds';

export const RequestRatingInput = ({ rating, validationHandler }) => {
    const[preRated, setPreRated] = useState(0)
    return (
        <div className='requestRatingInput'>
            {
                [1,2,3,4,5].map( (id) => {
                    return <Star 
                        id={id} 
                        preRated={preRated} 
                        rating={rating}
                        onHover={() => {setPreRated(id)}}
                        onClick={validationHandler}
                    />
                })
            }
        </div>
    )
}