import React, { useState } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Carrinho from './components/Carrinho';
import data from './data';


function App() {

  const {products}= data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find( (x) => x.id === product.id);
    if (exist) {
      cartItems.map( (x) => x.id === product.id ? {...exist, qty: exist.qty +1} : x );
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Carrinho onAdd={onAdd} cartItems={cartItems}></Carrinho>
      </div>
    </div>
  );
}

export default App;
