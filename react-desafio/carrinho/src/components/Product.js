import React from 'react';

export default function Product(props) {

    const {product} = props;

    return (
        <div>
            <img className="samll" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>R${product.price}</div>
            <div>
                <button>Adicionar ao Carrinho</button>
            </div>
        </div>
    )
}