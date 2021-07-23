import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Carrinho from './components/Carrinho';
import data from './data';

function App() {

  const {products}= data;

  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main products={products}></Main>
        <Carrinho></Carrinho>
      </div>
    </div>
  );
}

export default App;
