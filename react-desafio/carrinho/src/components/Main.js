import React from 'react';
import Product from './product';
import products from './data';

export default function Main(props){
    return (
        <main className="block col-2">
            <h2>Produtos</h2>
            <div className="row">
                {products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>
        </main>
    );
}