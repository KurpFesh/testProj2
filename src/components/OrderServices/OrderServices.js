import React from 'react';
import { Header } from '../Header/Header';
import { ProductList } from '../ProductList/ProductList';
import { RequestSection } from '../RequestSection/RequestSection';
import { Footer } from '../Footer/Footer';

export const OrderServices = () => {
    return <div className="orderServices">
        <Header />
        <ProductList />
        <RequestSection />
        <Footer />
    </div>
}