import React from 'react';

export default function Header(props){
    return (
        <header>
            <div>
                <a href="#/">
                    <h1>Carrinho</h1>
                </a>
            </div>
            <div>
                <a href="#/Carrinho">Carrinho</a>
                <a href="#/signin">SignIn</a>
            </div>
        </header>
    );
}