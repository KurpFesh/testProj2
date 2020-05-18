import React from 'react';

export const applyItemClasses = (arr, mainClass) => {
    return arr.map( id => {
        return (
            <div key={`${id} ${mainClass}`} className={`${mainClass} ${mainClass}--${id}`}></div>
        )
    })
}

