import React from 'react';

export default function Carrinho(props){

    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <aside className="block col-1">
            <h2>Itens do carrinho</h2>
            <div>
                {cartItems.length === 0 && <div>Carrinho vazio</div>}
                <div>
                    {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}</div>
                        <div className="col-2">
                            <button onClick={()=>onAdd(item)} className="add">+</button>
                            <button onClick={()=>onRemove(item)} className="remove">-</button>
                        </div>
                        <div className="col-2 text-right">
                            {item.qty} x R${item.price.toFixed(2)}
                        </div>
                    </div> 
                    ))}
                    {cartItems.length !== 0 && (
                        <>
                            <hr></hr>
                            <div className="row">
                                <div className="col-2">Valor</div>
                                <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                            </div>
                            <div className="row">
                                <div className="col-2">Impostos</div>
                                <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                            </div>
                            <div className="row">
                                <div className="col-2">Taxa de envio</div>
                                <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                            </div>
                            <div className="row">
                                <div className="col-2"><strong>Total</strong></div>
                                    <div className="col-1 text-right">
                                        <strong>
                                            ${totalPrice.toFixed(2)}
                                        </strong>
                                    </div>
                            </div>
                        </>
                    )}
                </div> 
            </div>
            <div>
                <button onClick={()=> alert('Finalizar a compra')}>Finalizar</button>
            </div>
        </aside>
    );
}