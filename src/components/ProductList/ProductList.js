import React from 'react';
import { connect } from 'react-redux';
import { ProductItem} from './ProductItem/ProductItem';
import { productImages } from './productImages';

import './productList.scss';

export const ProductListComponent = ({ products }) => {
    return (
        <div className='productList'>
            <div className='container'>
                <h2>Choose beacons and fill in the order form?</h2>
                <div className='productList__products'>
                {
                    Object.keys(products).map(productId => {
                        return (
                            <ProductItem
                                key={`${productId} product`}
                                image={productImages[productId]}
                                {...products[productId]}
                            />
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ products }) => {
    return {
        products
    }
}

export const ProductList = connect(mapStateToProps)(ProductListComponent);