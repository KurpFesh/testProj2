import React, { useState } from 'react';
import { connect } from 'react-redux';

import './productCounter.scss';

import { increaseProductAmount, decreaseProductAmount, 
    setProductAmount } from '../../../../redux/actions/productActions';

const ProductCounterComponent = ({ productId, amount, decreaseProductAmount, 
    increaseProductAmount, setProductAmount }) => {
        
    const [isEditable, setEditStatus] = useState(false);
    const [innerAmount, setInnerAmount] = useState(amount);

    const changeHandler = (event) => {
        event.target.value === '' || isNaN(parseInt(event.target.value)) || parseInt(event.target.value) < 0
        ? setInnerAmount(0)
        : setInnerAmount(parseInt(event.target.value))
    }
    const saveAmount = (event) => {
        event.target.value === '' || parseInt(event.target.value) < 0
        ? setProductAmount(productId, 0)
        : setProductAmount(productId, parseInt(event.target.value))
        setEditStatus(false);
    }

    const editAmount = () => {
        amount === '' || amount === 0
        ? setInnerAmount('')
        : setInnerAmount(amount);
        setEditStatus(true);
    }

    return (
        <div className='productCounter'>
            <button 
                className='productCounter__amountChanger productCounter__decreaser' 
                onClick={() => decreaseProductAmount(productId)}
            >-</button>
            
            {
                isEditable
                ? <input className='productCounter__amountEditor' value={innerAmount} onChange={changeHandler} onBlur={saveAmount} autoFocus />
                : <span className='productCounter__amount' onClick={editAmount}>{amount}</span>
            }

            <button 
                className='productCounter__amountChanger productCounter__increaser' 
                onClick={() => increaseProductAmount(productId)}
            >+</button>

            <span className='productCounter__amountText'>шт.</span>
        </div>
    )
}
    

export const ProductCounter = connect(null, { 
    increaseProductAmount, decreaseProductAmount, setProductAmount
})(ProductCounterComponent)

